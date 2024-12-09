import createGlobe from "cobe";
import { useEffect, useRef } from "react";
 
export function CobeDragToLocation() {
const canvasRef = useRef()
const locationToAngles = (lat, long) => {
  return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
}
const focusRef = useRef([0, 0])
useEffect(() => {
  let width = 0;
  let currentPhi = 0;
  let currentTheta = 0;
  const doublePi = Math.PI * 2;
  const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
  window.addEventListener('resize', onResize)
  onResize()
  const globe = createGlobe(canvasRef.current, {
    devicePixelRatio: 2,
    width: width * 2,
    height: width * 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 3,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 200 / 255, 21 / 255],
    glowColor: [1.2, 1.2, 1.2],
    markers: [
      { location: [37.78, -122.412], size: 0.1},
      { location: [52.52, 13.405], size: 0.1},
      { location: [35.676, 139.65], size: 0.1},
      { location: [-34.60, -58.38], size: 0.1},
    ],
    onRender: (state) => {
      state.phi = currentPhi
      state.theta = currentTheta
      const [focusPhi, focusTheta] = focusRef.current
      const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
      const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
      // Control the speed
      if (distPositive < distNegative) {
        currentPhi += distPositive * 0.08
      } else {
        currentPhi -= distNegative * 0.08
      }
      currentTheta = currentTheta * 0.92 + focusTheta * 0.08
      state.width = width * 2
      state.height = width * 2
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
  maxWidth: 600,
  aspectRatio: 1,
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
  <div className="flex flex-col md:flex-row justify-center items-center control-buttons" style={{ gap: '.5rem' }}>
    Rotate to:
    <button onClick={() => {
      focusRef.current = locationToAngles(37.78, -122.412)
    }}>📍 San Francisco </button>
    <button onClick={() => {
      focusRef.current = locationToAngles(52.52, 13.405)
    }}>📍 Berlin </button>
    <button onClick={() => {
      focusRef.current = locationToAngles(35.676, 139.65)
    }}>📍 Tokyo </button>
    <button onClick={() => {
      focusRef.current = locationToAngles(-34.60, -58.38)
    }}>📍 Buenos Aires </button>
  </div>
</div>
}
 
<style jsx global>{`
.control-buttons button {
background: rgba(155, 155, 155, 0.2);
border-radius: 9px;
gap:5px;
padding: 0.2rem .5rem;
cursor: pointer;
}
`}</style>