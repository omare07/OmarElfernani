import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlackHoleEntrance: React.FC = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBeingSucked, setIsBeingSucked] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                           (window.innerWidth <= 768) ||
                           ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Listen for messages from the Black Hole simulation
    const handleMessage = (event: MessageEvent) => {
      // Accept messages from same origin or iframe
      if (event.origin !== window.location.origin && event.origin !== 'null') {
        return;
      }
      
      if (event.data === 'blackhole-loaded') {
        console.log('Black hole simulation loaded successfully!');
        setIsLoaded(true);
        setTimeout(() => setShowUI(true), 1000);
      }
    };

    window.addEventListener('message', handleMessage);

    // Enhanced fallback with multiple timeouts for deployment
    const fallbackTimeout1 = setTimeout(() => {
      console.log('⚠️ First fallback triggered - simulation may be loading slowly');
      if (!isLoaded) {
        setIsLoaded(true);
        setTimeout(() => setShowUI(true), 500);
      }
    }, 3000);

    const fallbackTimeout2 = setTimeout(() => {
      console.log('⚠️ Final fallback triggered - forcing UI display');
      setIsLoaded(true);
      setShowUI(true);
    }, 8000);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(fallbackTimeout1);
      clearTimeout(fallbackTimeout2);
    };
  }, [isLoaded]);

  const handleEnterSite = () => {
    setIsBeingSucked(true);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate('/home');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Working Black Hole Simulation */}
      <motion.iframe
        src="/blackhole/index.html"
        className="absolute inset-0 w-full h-full border-0"
        title="Black Hole Simulation"
        style={{ zIndex: 1 }}
        animate={isBeingSucked ? {
          scale: [1, 1.2, 2, 5, 15],
          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(2)', 'brightness(4)', 'brightness(8)'],
          opacity: [1, 1, 0.8, 0.3, 0]
        } : {}}
        transition={{
          duration: 3.5,
          ease: [0.4, 0, 0.2, 1],
          times: [0, 0.2, 0.5, 0.8, 1]
        }}
      />



      {/* Subtle Gravitational Lensing Effect - No scaling */}
      {isBeingSucked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.2, 0.4, 0.3, 0]
          }}
          transition={{
            duration: 3.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.3, 0.6, 0.8, 1]
          }}
          className="absolute inset-0 z-12 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.01) 50%, transparent 70%)',
            filter: 'blur(2px)',
            mixBlendMode: 'screen'
          }}
        />
      )}

      {/* Energy Streams Layer 1 */}
      {isBeingSucked && (
        <div className="absolute inset-0 z-14 pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) + Math.random() * 15;
            const startRadius = 45 + Math.random() * 10;
            const startX = 50 + Math.cos(angle * Math.PI / 180) * startRadius;
            const startY = 50 + Math.sin(angle * Math.PI / 180) * startRadius;
            
            return (
              <motion.div
                key={`stream-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: '2px',
                  height: '40px',
                  background: 'linear-gradient(to bottom, rgba(138, 43, 226, 0.8), rgba(75, 0, 130, 0.4), transparent)',
                  transformOrigin: 'center bottom',
                  transform: `rotate(${angle + 90}deg)`,
                }}
                initial={{
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  opacity: [0, 0.8, 1, 0.6, 0],
                  scale: [1, 1.2, 0.8, 0.4, 0],
                  x: [0, `${(50 - startX) * 0.3}vw`, `${(50 - startX) * 0.7}vw`, `${(50 - startX) * 1.1}vw`, `${(50 - startX) * 1.4}vw`],
                  y: [0, `${(50 - startY) * 0.3}vh`, `${(50 - startY) * 0.7}vh`, `${(50 - startY) * 1.1}vh`, `${(50 - startY) * 1.4}vh`],
                }}
                transition={{
                  duration: 3.2,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.15, 0.4, 0.75, 1]
                }}
              />
            );
          })}
        </div>
      )}

      {/* Light Bending Rays */}
      {isBeingSucked && (
        <div className="absolute inset-0 z-14 pointer-events-none">
          {[...Array(8)].map((_, i) => {
            const angle = i * 45;
            const startRadius = 40;
            const startX = 50 + Math.cos(angle * Math.PI / 180) * startRadius;
            const startY = 50 + Math.sin(angle * Math.PI / 180) * startRadius;
            
            return (
              <motion.div
                key={`ray-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: '1px',
                  height: '60px',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(173, 216, 230, 0.3), transparent)',
                  transformOrigin: 'center bottom',
                  transform: `rotate(${angle + 90}deg)`,
                }}
                initial={{
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  opacity: [0, 0.6, 0.9, 0.4, 0],
                  scale: [1, 1.1, 0.7, 0.3, 0],
                  x: [0, `${(50 - startX) * 0.2}vw`, `${(50 - startX) * 0.6}vw`, `${(50 - startX) * 1.0}vw`, `${(50 - startX) * 1.3}vw`],
                  y: [0, `${(50 - startY) * 0.2}vh`, `${(50 - startY) * 0.6}vh`, `${(50 - startY) * 1.0}vh`, `${(50 - startY) * 1.3}vh`],
                  rotate: [angle + 90, angle + 120, angle + 180, angle + 270, angle + 360],
                }}
                transition={{
                  duration: 3.4,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.2, 0.5, 0.8, 1]
                }}
              />
            );
          })}
        </div>
      )}

      {/* Enhanced Multi-Layer Particle System */}
      {isBeingSucked && (
        <>
          {/* Layer 1: Small Fast Particles */}
          <div className="absolute inset-0 z-15 pointer-events-none">
            {[...Array(25)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const centerX = 50;
              const centerY = 50;
              const size = 2 + Math.random() * 2; // 2-4px
              const distance = Math.sqrt(Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2));
              
              return (
                <motion.div
                  key={`fast-${i}`}
                  className="absolute"
                  style={{
                    left: `${startX}%`,
                    top: `${startY}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    background: distance > 30 ? 'rgba(255, 255, 255, 0.9)' : distance > 15 ? 'rgba(173, 216, 230, 0.8)' : 'rgba(138, 43, 226, 0.7)',
                    boxShadow: `0 0 ${size * 2}px currentColor`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0.8, 0.4, 0],
                    scale: [1, 1.2, 0.8, 0.4, 0.1, 0],
                    x: [0, `${(centerX - startX) * 0.15}vw`, `${(centerX - startX) * 0.45}vw`, `${(centerX - startX) * 0.8}vw`, `${(centerX - startX) * 1.2}vw`, `${(centerX - startX) * 1.5}vw`],
                    y: [0, `${(centerY - startY) * 0.15}vh`, `${(centerY - startY) * 0.45}vh`, `${(centerY - startY) * 0.8}vh`, `${(centerY - startY) * 1.2}vh`, `${(centerY - startY) * 1.5}vh`],
                    filter: ['blur(0px)', 'blur(0px)', 'blur(0.5px)', 'blur(1px)', 'blur(2px)', 'blur(3px)'],
                  }}
                  transition={{
                    duration: 2.8,
                    delay: i * 0.03,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    times: [0, 0.1, 0.3, 0.6, 0.85, 1]
                  }}
                />
              );
            })}
          </div>

          {/* Layer 2: Medium Orbital Particles */}
          <div className="absolute inset-0 z-16 pointer-events-none">
            {[...Array(20)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const centerX = 50;
              const centerY = 50;
              const size = 3 + Math.random() * 3; // 3-6px
              const distance = Math.sqrt(Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2));
              const orbitRadius = 15 + Math.random() * 10;
              
              return (
                <motion.div
                  key={`orbital-${i}`}
                  className="absolute"
                  style={{
                    left: `${startX}%`,
                    top: `${startY}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    background: distance > 25 ? 'rgba(255, 255, 255, 0.8)' : distance > 12 ? 'rgba(173, 216, 230, 0.7)' : 'rgba(138, 43, 226, 0.6)',
                    boxShadow: `0 0 ${size * 3}px currentColor`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [0, 0.8, 1, 0.9, 0.5, 0],
                    scale: [1, 1.3, 1.1, 0.6, 0.2, 0],
                    x: [
                      0,
                      `${(centerX - startX) * 0.1 + Math.cos(i * 30 * Math.PI / 180) * orbitRadius * 0.01}vw`,
                      `${(centerX - startX) * 0.3 + Math.cos((i * 30 + 180) * Math.PI / 180) * orbitRadius * 0.01}vw`,
                      `${(centerX - startX) * 0.7}vw`,
                      `${(centerX - startX) * 1.1}vw`,
                      `${(centerX - startX) * 1.4}vw`
                    ],
                    y: [
                      0,
                      `${(centerY - startY) * 0.1 + Math.sin(i * 30 * Math.PI / 180) * orbitRadius * 0.01}vh`,
                      `${(centerY - startY) * 0.3 + Math.sin((i * 30 + 180) * Math.PI / 180) * orbitRadius * 0.01}vh`,
                      `${(centerY - startY) * 0.7}vh`,
                      `${(centerY - startY) * 1.1}vh`,
                      `${(centerY - startY) * 1.4}vh`
                    ],
                    rotate: [0, 90, 270, 540, 900, 1260],
                    filter: ['blur(0px)', 'blur(0px)', 'blur(0.5px)', 'blur(1px)', 'blur(2px)', 'blur(4px)'],
                  }}
                  transition={{
                    duration: 3.1,
                    delay: i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    times: [0, 0.12, 0.35, 0.65, 0.88, 1]
                  }}
                />
              );
            })}
          </div>

          {/* Layer 3: Large Slow Particles with Trails */}
          <div className="absolute inset-0 z-17 pointer-events-none">
            {[...Array(15)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const centerX = 50;
              const centerY = 50;
              const size = 4 + Math.random() * 4; // 4-8px
              const distance = Math.sqrt(Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2));
              
              return (
                <motion.div
                  key={`slow-${i}`}
                  className="absolute"
                  style={{
                    left: `${startX}%`,
                    top: `${startY}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    background: distance > 30 ? 'rgba(255, 255, 255, 0.9)' : distance > 15 ? 'rgba(173, 216, 230, 0.8)' : 'rgba(138, 43, 226, 0.7)',
                    boxShadow: `0 0 ${size * 4}px currentColor, 0 0 ${size * 8}px rgba(255, 255, 255, 0.3)`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [0, 0.9, 1, 0.8, 0.3, 0],
                    scale: [1, 1.4, 1.2, 0.8, 0.3, 0],
                    x: [0, `${(centerX - startX) * 0.08}vw`, `${(centerX - startX) * 0.25}vw`, `${(centerX - startX) * 0.6}vw`, `${(centerX - startX) * 1.0}vw`, `${(centerX - startX) * 1.3}vw`],
                    y: [0, `${(centerY - startY) * 0.08}vh`, `${(centerY - startY) * 0.25}vh`, `${(centerY - startY) * 0.6}vh`, `${(centerY - startY) * 1.0}vh`, `${(centerY - startY) * 1.3}vh`],
                    rotate: [0, 45, 180, 360, 540, 720],
                    filter: ['blur(0px)', 'blur(0px)', 'blur(0.5px)', 'blur(1px)', 'blur(2px)', 'blur(5px)'],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: i * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    times: [0, 0.08, 0.25, 0.55, 0.82, 1]
                  }}
                />
              );
            })}
          </div>

          {/* Layer 4: Spiral Particles */}
          <div className="absolute inset-0 z-18 pointer-events-none">
            {[...Array(12)].map((_, i) => {
              const angle = i * 30;
              const startRadius = 35 + Math.random() * 15;
              const startX = 50 + Math.cos(angle * Math.PI / 180) * startRadius;
              const startY = 50 + Math.sin(angle * Math.PI / 180) * startRadius;
              const size = 3 + Math.random() * 2;
              
              return (
                <motion.div
                  key={`spiral-${i}`}
                  className="absolute"
                  style={{
                    left: `${startX}%`,
                    top: `${startY}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: `0 0 ${size * 3}px rgba(173, 216, 230, 0.6)`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0.7, 0],
                    scale: [1, 1.1, 0.9, 0.4, 0],
                    x: [
                      0,
                      `${Math.cos((angle + 90) * Math.PI / 180) * startRadius * 0.3}vw`,
                      `${Math.cos((angle + 180) * Math.PI / 180) * startRadius * 0.2}vw`,
                      `${(50 - startX) * 0.8}vw`,
                      `${(50 - startX) * 1.2}vw`
                    ],
                    y: [
                      0,
                      `${Math.sin((angle + 90) * Math.PI / 180) * startRadius * 0.3}vh`,
                      `${Math.sin((angle + 180) * Math.PI / 180) * startRadius * 0.2}vh`,
                      `${(50 - startY) * 0.8}vh`,
                      `${(50 - startY) * 1.2}vh`
                    ],
                    rotate: [0, 180, 360, 720, 1080],
                  }}
                  transition={{
                    duration: 3.3,
                    delay: i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    times: [0, 0.2, 0.4, 0.75, 1]
                  }}
                />
              );
            })}
          </div>
        </>
      )}

      {/* Retro-themed UI Overlay - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isBeingSucked ? {
          opacity: 0
        } : {
          opacity: showUI ? 1 : 0,
          x: showUI ? 0 : -100
        }}
        transition={isBeingSucked ? {
          duration: 0,
          ease: [0.4, 0, 0.2, 1]
        } : { delay: 0.3, duration: 0.8 }}
        className={`absolute z-20 pointer-events-none ${
          isMobile
            ? 'top-4 left-4 right-4 text-center'
            : 'top-8 left-8'
        }`}
      >
        <h1
          className={`font-retro font-bold mb-2 ${
            isMobile
              ? 'text-2xl sm:text-3xl'
              : 'text-3xl md:text-5xl'
          }`}
          style={{
            color: '#fbbf24',
            textShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.3)',
            letterSpacing: isMobile ? '1px' : '2px'
          }}
        >
          OMAR ELFERNANI
        </h1>
        <p
          className={`text-white/80 font-retro ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}
          style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}
        >
          Interactive Portfolio
        </p>
      </motion.div>

      {/* Enter Site Button - Fixed Position */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={isBeingSucked ? {
          opacity: 0
        } : {
          opacity: showUI ? 1 : 0,
          y: showUI ? 0 : 100
        }}
        transition={isBeingSucked ? {
          duration: 0,
          ease: [0.4, 0, 0.2, 1]
        } : { delay: 0.8, duration: 0.8 }}
        whileHover={!isBeingSucked ? {
          scale: 1.05,
          boxShadow: '0 0 30px rgba(255, 255, 0, 0.8)'
        } : {}}
        whileTap={!isBeingSucked ? { scale: 0.95 } : {}}
        onClick={handleEnterSite}
        disabled={isBeingSucked}
        className={`absolute z-20 font-retro font-bold rounded-lg transition-all duration-300 pointer-events-auto ${
          isMobile
            ? 'bottom-4 left-4 right-4 py-3 px-6 text-lg'
            : 'bottom-8 right-8 px-8 py-4 text-xl'
        }`}
        style={{
          backgroundColor: isBeingSucked ? '#ff4444' : '#d4af37',
          color: '#000000',
          boxShadow: isBeingSucked ? '0 0 40px rgba(255, 68, 68, 0.8)' : '0 0 20px rgba(212, 175, 55, 0.5)',
          letterSpacing: '1px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
        }}
        onMouseEnter={(e) => {
          if (!isBeingSucked) {
            e.currentTarget.style.backgroundColor = '#ff8c42';
          }
        }}
        onMouseLeave={(e) => {
          if (!isBeingSucked) {
            e.currentTarget.style.backgroundColor = '#d4af37';
          }
        }}
      >
        {isBeingSucked ? 'ENTERING...' : 'ENTER SITE'}
      </motion.button>

      {/* Controls Info - Fixed Position */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isBeingSucked ? {
            opacity: 0
          } : {
            opacity: showUI ? 0.8 : 0,
            y: showUI ? 0 : 100
          }}
          transition={isBeingSucked ? {
            duration: 0,
            ease: [0.4, 0, 0.2, 1]
          } : { delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white text-xs max-w-xs pointer-events-none"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <h4 className="font-retro font-bold mb-2" style={{ color: '#d4af37' }}>CONTROLS</h4>
          <div className="space-y-1 text-white/80">
            <div>MOUSE: Rotate camera</div>
            <div>WHEEL: Zoom in/out</div>
            <div>H KEY: Toggle parameters</div>
            <div>F KEY: Fullscreen mode</div>
          </div>
        </motion.div>
      )}
      
      {/* Mobile Controls Info - Fixed Position */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isBeingSucked ? {
            opacity: 0
          } : {
            opacity: showUI ? 0.8 : 0,
            y: showUI ? 0 : 100
          }}
          transition={isBeingSucked ? {
            duration: 0,
            ease: [0.4, 0, 0.2, 1]
          } : { delay: 1.2, duration: 0.6 }}
          className="absolute bottom-20 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white text-xs pointer-events-none"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <h4 className="font-retro font-bold mb-2 text-center" style={{ color: '#d4af37' }}>TOUCH CONTROLS</h4>
          <div className="space-y-1 text-white/80 text-center">
            <div>TOUCH & DRAG: Rotate camera</div>
            <div>PINCH: Zoom in/out</div>
            <div>DOUBLE TAP: Toggle parameters</div>
          </div>
        </motion.div>
      )}

      {/* Physics Badge - Fixed Position */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isBeingSucked ? {
            opacity: 0
          } : {
            opacity: showUI ? 0.9 : 0,
            x: showUI ? 0 : 100
          }}
          transition={isBeingSucked ? {
            duration: 0,
            ease: [0.4, 0, 0.2, 1]
          } : { delay: 0.6, duration: 0.6 }}
          className="absolute top-8 right-8 z-20 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-xs pointer-events-none"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <div className="font-retro font-bold mb-1" style={{ color: '#d4af37' }}>SCHWARZSCHILD</div>
          <div className="text-white/80">Real-time WebGL</div>
          <div className="text-white/60">Ray Tracing</div>
        </motion.div>
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-2 border-t-transparent rounded-full mx-auto mb-6"
              style={{ borderColor: '#d4af37', borderTopColor: 'transparent' }}
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="space-y-2"
            >
              <p className="font-retro text-lg" style={{ color: '#d4af37' }}>LOADING BLACK HOLE</p>
              <p className="text-white/60 font-mono text-sm">WebAssembly Ready!</p>
              <p className="text-white/40 font-mono text-xs">Initializing Schwarzschild simulation...</p>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlackHoleEntrance;