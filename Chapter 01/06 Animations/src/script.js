import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// Animations with Green Sock
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// const tick = () => {
//   // Render
//   renderer.render(scene, camera);

//   // Call function again on the next frame
//   window.requestAnimationFrame(tick);
// };
// tick();

// Normalize animation speed
// Clock
const clock = new THREE.Clock();

// Animations
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime * Math.PI * 2;
  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.position.y = Math.sin(elapsedTime);

  // Update the camera
  camera.position.x = Math.cos(elapsedTime);
  camera.position.y = Math.sin(elapsedTime);
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  // Call function again on the next frame
  window.requestAnimationFrame(tick);
};
tick();


/* Manual way to normalize animation regardless of frame rate
  const tick = () => {
    // Time
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    // Update objects
    mesh.rotation.y += 0.001 * deltaTime;

    // Render
    renderer.render(scene, camera);

    // Call function again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();
*/

