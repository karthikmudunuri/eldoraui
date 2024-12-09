import createGlobe from "cobe";
import { useEffect, useRef } from "react";
 
export function CobeScaled() {
const canvasRef = useRef();
useEffect(() => {
  let width = 0;
  const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
  window.addEventListener('resize', onResize)
  onResize()
  const globe = createGlobe(canvasRef.current, {
    devicePixelRatio: 2,
    width: width * 2,
    height: width * 2 * 0.4,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 3,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1.2, 1.2, 1.2],
    markers: [],
    scale: 2.5,
    offset: [0, width * 2 * 0.4 * 0.6],
    onRender: (state) => {
      state.width = width * 2
      state.height = width * 2 * 0.4
    }
  })
  setTimeout(() => canvasRef.current.style.opacity = '1')
  return () => { 
    globe.destroy();
    window.removeEventListener('resize', onResize);
  }
}, [])
return <div style={{
  width: '100%',
  aspectRatio: 1/.4,
  margin: 'auto',
  position: 'relative',
}}>
  <canvas
    ref={canvasRef}
    style={{
      width: '100%',
      height: '100%',
      contain: 'layout paint size',
      opacity: 0,
      transition: 'opacity 1s ease',
    }}
  />
</div>
}