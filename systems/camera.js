import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js&#39;

export function setupCamera() {

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

camera.position.set(0, 5, 5)

return camera
}
