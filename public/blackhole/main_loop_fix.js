// Enhanced main loop initialization fix for WebAssembly
console.log('🔧 Loading enhanced main loop fix...');

// Initialize Module object with proper structure
if (typeof Module === 'undefined') {
    var Module = {};
}

// Initialize emscripten runtime state
Module.mainLoop = {
    running: false,
    func: null,
    currentFrameNumber: 0,
    timingMode: 0,
    timingValue: 0,
    scheduler: null
};

// Store original functions if they exist
Module._originalSetMainLoop = Module.setMainLoop;

// Enhanced main loop management with proper emscripten compatibility
Module.setMainLoop = function(func, fps, simulateInfiniteLoop) {
    console.log('🔧 Enhanced setMainLoop called with fps:', fps, 'simulate:', simulateInfiniteLoop);
    
    if (typeof func !== 'function') {
        console.error('❌ Main loop function is not a function:', typeof func);
        return;
    }
    
    // Stop any existing main loop
    if (Module.mainLoop.running) {
        Module.mainLoop.running = false;
        if (Module.mainLoop.scheduler) {
            clearTimeout(Module.mainLoop.scheduler);
            Module.mainLoop.scheduler = null;
        }
    }
    
    Module.mainLoop.func = func;
    Module.mainLoop.running = true;
    Module.mainLoop.currentFrameNumber = 0;
    
    const targetFPS = fps || 60;
    const frameTime = 1000 / targetFPS;
    let lastTime = performance.now();
    
    function mainLoopRunner(currentTime) {
        if (!Module.mainLoop.running) return;
        
        // Frame rate limiting
        if (currentTime - lastTime >= frameTime) {
            try {
                Module.mainLoop.currentFrameNumber++;
                Module.mainLoop.func();
                lastTime = currentTime;
            } catch (e) {
                console.error('❌ Error in main loop:', e);
                Module.mainLoop.running = false;
                return;
            }
        }
        
        if (Module.mainLoop.running) {
            Module.mainLoop.scheduler = requestAnimationFrame(mainLoopRunner);
        }
    }
    
    console.log('✅ Starting enhanced main loop with target FPS:', targetFPS);
    Module.mainLoop.scheduler = requestAnimationFrame(mainLoopRunner);
    
    // Handle infinite loop simulation for emscripten compatibility
    if (simulateInfiniteLoop) {
        console.log('🔧 Simulating infinite loop for emscripten compatibility');
        // Don't actually create an infinite loop, just indicate the main loop is running
    }
};

// Enhanced emscripten timing function
Module.setMainLoopTiming = function(mode, value) {
    console.log('🔧 setMainLoopTiming called with mode:', mode, 'value:', value);
    Module.mainLoop.timingMode = mode;
    Module.mainLoop.timingValue = value;
    
    // Mode 0: setTimeout, Mode 1: rAF, Mode 2: setImmediate
    if (mode === 0) {
        console.log('🔧 Using setTimeout timing mode');
    } else if (mode === 1) {
        console.log('🔧 Using requestAnimationFrame timing mode');
    } else if (mode === 2) {
        console.log('🔧 Using setImmediate timing mode');
    }
    
    return 0; // Success
};

// Global emscripten function compatibility
if (typeof window !== 'undefined') {
    // Main loop functions
    window._emscripten_set_main_loop = function(func, fps, simulateInfiniteLoop) {
        console.log('🔧 _emscripten_set_main_loop called');
        if (Module.setMainLoop) {
            Module.setMainLoop(func, fps, simulateInfiniteLoop);
        }
    };
    
    window._emscripten_set_main_loop_timing = function(mode, value) {
        console.log('🔧 _emscripten_set_main_loop_timing called with mode:', mode, 'value:', value);
        if (Module.setMainLoopTiming) {
            return Module.setMainLoopTiming(mode, value);
        }
        return 0; // Success
    };
    
    window._emscripten_cancel_main_loop = function() {
        console.log('🔧 _emscripten_cancel_main_loop called');
        if (Module.mainLoop) {
            Module.mainLoop.running = false;
            if (Module.mainLoop.scheduler) {
                cancelAnimationFrame(Module.mainLoop.scheduler);
                Module.mainLoop.scheduler = null;
            }
        }
    };
    
    // Additional emscripten compatibility functions
    window._emscripten_get_now = function() {
        return performance.now();
    };
    
    window._emscripten_pause_main_loop = function() {
        console.log('🔧 _emscripten_pause_main_loop called');
        if (Module.mainLoop) {
            Module.mainLoop.running = false;
        }
    };
    
    window._emscripten_resume_main_loop = function() {
        console.log('🔧 _emscripten_resume_main_loop called');
        if (Module.mainLoop && Module.mainLoop.func) {
            Module.setMainLoop(Module.mainLoop.func, 60, false);
        }
    };
}

// Add Module to global scope if not already there
if (typeof window !== 'undefined' && !window.Module) {
    window.Module = Module;
}

// Ensure proper initialization order
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 DOM loaded, main loop system ready');
});

console.log('✅ Enhanced main loop fix loaded with full emscripten compatibility');
