import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js&#39;

import { createPlayer } from './systems/player.js'
import { setupCamera } from './systems/camera.js'
import { createCity } from './world/city.js'

const scene = new THREE.Scene()

scene.background = new THREE.Color(0x87ceeb)

const renderer = new THREE.WebGLRenderer({
canvas: document.getElementById('game')
})

renderer.setSize(window.innerWidth, window.innerHeight)

const camera = setupCamera()

const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(10, 20, 10)

scene.add(light)

const ambient = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambient)

const player = createPlayer()
scene.add(player)

createCity(scene)

const keys = {}

window.addEventListener('keydown', e => {
keys[e.key.toLowerCase()] = true
})

window.addEventListener('keyup', e => {
keys[e.key.toLowerCase()] = false
})

function animate() {

requestAnimationFrame(animate)

if (keys['w']) player.position.z -= 0.1
if (keys['s']) player.position.z += 0.1
if (keys['a']) player.position.x -= 0.1
if (keys['d']) player.position.x += 0.1

camera.position.x = player.position.x
camera.position.z = player.position.z + 5

camera.lookAt(player.position)

renderer.render(scene, camera)
}

animate()

