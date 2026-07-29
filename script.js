import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(10, 10, 10);
sun.castShadow = true;
scene.add(sun);

// Ground
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshStandardMaterial({ color: 0x2e8b57 })
);

ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Load Tejas
const loader = new GLTFLoader();

loader.load(
  "assets/models/hal_tejas.glb", // Change this if your filename is different
  (gltf) => {
    const jet = gltf.scene;

    jet.scale.set(1, 1, 1);
    jet.position.set(0, 0, 0);

    jet.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });

    scene.add(jet);

    function animate() {
      requestAnimationFrame(animate);

      jet.rotation.y += 0.003;

      controls.update();
      renderer.render(scene, camera);
    }

    animate();
  },
  undefined,
  (error) => {
    console.error(error);
  }
);
