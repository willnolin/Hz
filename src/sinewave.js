const gui = new dat.GUI()
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 75,
  freq: 0.01
}
const strokeColor = {
  h: 100,
  s: 50,
  l: 50
}

const waveFolder = gui.addFolder('wave')
waveFolder.add(wave, 'y', 0, canvas.height)
waveFolder.add(wave, 'length', -0.01, 0.01)
waveFolder.add(wave, 'amplitude', -300, 300)
waveFolder.add(wave, 'freq', -0.01, 1)
waveFolder.open()

const strokeFolder = gui.addFolder('stroke')
strokeFolder.add(strokeColor, 'h', 0, 255)
strokeFolder.add(strokeColor, 's', 0, 100)
strokeFolder.add(strokeColor, 'l', 0, 100)
strokeFolder.open()

let increment = wave.freq
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(0,0,0,0.5)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.beginPath()
  
  c.moveTo(0, canvas.height / 2)
  
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i*wave.length + increment) * wave.amplitude)
    
  }
  c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`
  c.stroke()
  increment += wave.freq
  
}
animate()
