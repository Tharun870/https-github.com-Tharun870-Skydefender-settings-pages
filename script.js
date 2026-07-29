import * as THREE from "three";

// Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000814);

// Camera
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 2);

light.position.set(5,5,5);

scene.add(light);

// Cube (temporary aircraft placeholder)
const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
color:0x00bfff
});

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

// Animation
function animate(){

requestAnimationFrame(animate);

cube.rotation.x +=0.01;

cube.rotation.y +=0.01;

renderer.render(scene,camera);

}

animate();canvas{
position:fixed;
top:0;
left:0;
z-index:-1;
}

body{
overflow:hidden;
}
