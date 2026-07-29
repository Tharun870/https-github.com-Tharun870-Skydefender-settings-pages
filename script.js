
import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x001428);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5,5,5);
scene.add(light);

// Aircraft Group
const aircraft = new THREE.Group();

// Body
const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25,0.25,3,32),
    new THREE.MeshStandardMaterial({color:0x999999})
);
body.rotation.z = Math.PI/2;
aircraft.add(body);

// Wings
const wing = new THREE.Mesh(
    new THREE.BoxGeometry(1.8,0.08,0.6),
    new THREE.MeshStandardMaterial({color:0x666666})
);
aircraft.add(wing);

// Tail
const tail = new THREE.Mesh(
    new THREE.BoxGeometry(0.5,0.08,0.4),
    new THREE.MeshStandardMaterial({color:0x666666})
);
tail.position.x = -1.1;
aircraft.add(tail);

scene.add(aircraft);

// Animation
function animate(){
requestAnimationFrame(animate);

aircraft.rotation.y += 0.01;

renderer.render(scene,camera);
}

animate();
