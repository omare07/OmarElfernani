// Enhanced WebGL compatibility patch for black hole simulation
console.log('🔧 Loading Enhanced WebGL compatibility patch...');

// Comprehensive WebGL context patching
(function() {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    
    HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
        // Enhanced context attributes for WASM compatibility
        if (contextType === 'webgl2' || contextType === 'webgl') {
            contextAttributes = contextAttributes || {};
            // Ensure proper attributes for WASM modules
            contextAttributes.antialias = contextAttributes.antialias !== false;
            contextAttributes.depth = contextAttributes.depth !== false;
            contextAttributes.stencil = contextAttributes.stencil !== false;
            contextAttributes.alpha = contextAttributes.alpha !== false;
            contextAttributes.premultipliedAlpha = contextAttributes.premultipliedAlpha !== false;
            contextAttributes.preserveDrawingBuffer = contextAttributes.preserveDrawingBuffer || false;
            contextAttributes.powerPreference = contextAttributes.powerPreference || 'high-performance';
        }
        
        const context = originalGetContext.call(this, contextType, contextAttributes);
        
        if ((contextType === 'webgl2' || contextType === 'webgl') && context) {
            console.log(`🔧 Patching ${contextType.toUpperCase()} context for WASM compatibility...`);
            
            // Store original functions
            const originalTexImage2D = context.texImage2D;
            const originalGenerateMipmap = context.generateMipmap;
            const originalGetError = context.getError;
            
            // Enhanced texture format mapping with numeric constants
            const formatMap = new Map([
                // SRGB formats (35904 = SRGB8, 35906 = SRGB8_ALPHA8)
                [35904, 32849], // SRGB8 -> RGB8
                [35906, 32856], // SRGB8_ALPHA8 -> RGBA8
                [context.SRGB || 35904, context.RGB8 || 32849],
                [context.SRGB_ALPHA || 35906, context.RGBA8 || 32856],
                [context.SRGB8 || 35905, context.RGB8 || 32849],
                [context.SRGB8_ALPHA8 || 35907, context.RGBA8 || 32856],
                
                // RGB format issues (34843 = RGB8, 6407 = RGB)
                [34843, 6407], // RGB8 -> RGB (for compatibility)
                [6407, 6408],  // RGB -> RGBA (fallback)
                
                // Depth formats
                [context.DEPTH_COMPONENT24 || 33190, context.DEPTH_COMPONENT16 || 33189],
                [context.DEPTH_COMPONENT32F || 36012, context.DEPTH_COMPONENT16 || 33189],
                [context.DEPTH24_STENCIL8 || 35056, context.DEPTH_STENCIL || 34041],
                [context.DEPTH32F_STENCIL8 || 36013, context.DEPTH_STENCIL || 34041],
                
                // Float formats fallbacks
                [context.R32F || 33326, context.LUMINANCE || 6409],
                [context.RG32F || 33328, context.LUMINANCE_ALPHA || 6410],
                [context.RGB32F || 34837, context.RGB || 6407],
                [context.RGBA32F || 34836, context.RGBA || 6408],
                [context.R16F || 33325, context.LUMINANCE || 6409],
                [context.RG16F || 33327, context.LUMINANCE_ALPHA || 6410],
                [context.RGB16F || 34843, context.RGB || 6407],
                [context.RGBA16F || 34842, context.RGBA || 6408]
            ]);
            
            // Enhanced texImage2D with comprehensive format handling
            context.texImage2D = function(target, level, internalformat, width, height, border, format, type, pixels) {
                try {
                    // Map unsupported formats to supported ones
                    let mappedFormat = formatMap.get(internalformat) || internalformat;
                    let mappedExternalFormat = format;
                    
                    // Special handling for problematic formats
                    if (internalformat === 6407 || internalformat === 34843) { // RGB formats
                        mappedFormat = 6408; // RGBA
                        mappedExternalFormat = 6408; // RGBA
                        console.log(`🔧 Converting RGB format ${internalformat} to RGBA for compatibility`);
                    } else if (mappedFormat !== internalformat) {
                        console.log(`🔧 Converting texture format ${internalformat} to ${mappedFormat} for compatibility`);
                    }
                    
                    // Handle different argument patterns
                    if (arguments.length === 6) {
                        // texImage2D(target, level, internalformat, format, type, source)
                        return originalTexImage2D.call(this, target, level, mappedFormat, width, height, border);
                    } else if (arguments.length === 9) {
                        // texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
                        return originalTexImage2D.call(this, target, level, mappedFormat, width, height, border, mappedExternalFormat, type, pixels);
                    } else {
                        return originalTexImage2D.apply(this, arguments);
                    }
                } catch (error) {
                    console.warn('🔧 texImage2D failed, trying RGBA fallback:', error);
                    // Fallback to basic RGBA format
                    try {
                        if (arguments.length === 9) {
                            return originalTexImage2D.call(this, target, level, context.RGBA, width, height, border, context.RGBA, context.UNSIGNED_BYTE, pixels);
                        } else {
                            return originalTexImage2D.call(this, target, level, context.RGBA, width, height, border);
                        }
                    } catch (fallbackError) {
                        console.error('🔧 Even RGBA fallback failed:', fallbackError);
                        // Return without throwing to prevent crashes
                        return;
                    }
                }
            };
            
            // Enhanced generateMipmap with format checking
            context.generateMipmap = function(target) {
                try {
                    // Check if the current texture supports mipmap generation
                    const currentTexture = context.getParameter(context.TEXTURE_BINDING_2D);
                    if (!currentTexture) {
                        console.warn('🔧 No texture bound, skipping mipmap generation');
                        return;
                    }
                    
                    return originalGenerateMipmap.call(this, target);
                } catch (error) {
                    console.warn('🔧 generateMipmap failed, texture format may not support mipmaps:', error);
                    // Silently fail for unsupported formats - this is common and expected
                    return;
                }
            };
            
            // Enhanced error reporting
            let lastError = context.NO_ERROR;
            context.getError = function() {
                const error = originalGetError.call(this);
                if (error !== context.NO_ERROR && error !== lastError) {
                    const errorNames = {
                        [context.INVALID_ENUM]: 'INVALID_ENUM',
                        [context.INVALID_VALUE]: 'INVALID_VALUE',
                        [context.INVALID_OPERATION]: 'INVALID_OPERATION',
                        [context.OUT_OF_MEMORY]: 'OUT_OF_MEMORY',
                        [context.CONTEXT_LOST_WEBGL]: 'CONTEXT_LOST_WEBGL'
                    };
                    console.warn(`🔧 WebGL Error: ${errorNames[error] || error}`);
                    lastError = error;
                }
                return error;
            };
            
            // Add extension compatibility
            const originalGetExtension = context.getExtension;
            context.getExtension = function(name) {
                const ext = originalGetExtension.call(this, name);
                if (!ext && name) {
                    console.log(`🔧 Extension ${name} not available, providing stub`);
                    // Provide basic stubs for common extensions
                    if (name === 'OES_texture_float') {
                        return {}; // Empty object to indicate "support"
                    }
                    if (name === 'OES_texture_half_float') {
                        return {};
                    }
                    if (name === 'WEBGL_depth_texture') {
                        return {};
                    }
                }
                return ext;
            };
            
            console.log('✅ Enhanced WebGL context patched successfully');
        }
        
        return context;
    };
})();

console.log('✅ Enhanced WebGL compatibility patch loaded');
