import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(0,2,8);

const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled=true;
document.body.appendChild(renderer.domElement);

// Lights
scene.add(new THREE.AmbientLight(0xffffff,1));

const sun=new THREE.DirectionalLight(0xffffff,2);
sun.position.set(10,10,10);
scene.add(sun);

// Ground
const ground=new THREE.Mesh(
new THREE.PlaneGeometry(100,100),
new THREE.MeshStandardMaterial({color:0x2E8B57})
);

ground.rotation.x=-Math.PI/2;
ground.position.y=-1;
scene.add(ground);

// Controls
const controls=new OrbitControls(camera,renderer.domElement);

// Load Tejas
const loader=new GLTFLoader();

loader.load(
"assets/models/Tejas.glb",

(gltf)=>{

const tejas=gltf.scene;

tejas.scale.set(1,1,1);

tejas.position.set(0,0,0);

scene.add(tejas);

animate();

},

undefined,

(error)=>{

console.log(error);

}

);

function animate(){

requestAnimationFrame(animate);

controls.update();

renderer.render(scene,camera);

}
