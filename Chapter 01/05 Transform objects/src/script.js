import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Position
 */
// mesh.position.x = 0.7; // to the right
// mesh.position.y = -0.6; // down
// mesh.position.y = 1; // closer to the camera
mesh.position.set(0.7, -0.6, 1); // set x, y and z at once

// distance from the mesh to center of the scene
console.log(mesh.position.length());

// reduces the length of the vector to 1 unit but preserving its direction
mesh.position.normalize();
console.log(mesh.position.length());

/**
 * Scale
 */
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

/**
 * Rotation
 */
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// distance from the camera and the object
console.log(mesh.position.distanceTo(camera.position));

// look at the object
camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);