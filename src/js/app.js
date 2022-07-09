import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

// get the element that will hold our scene
const container = document.getElementById('scene');

// create a Scene
const scene = new Scene();
scene.background = new Color('#181818');

// create a perspective camera which sees the scene as human eye does
// these 4 parameters will create a bounded region of space which is called camera's VIEWING FRUSTRUM
// everything inside the frustum is visible, while everything outside it is not.
const fov = 35; // Field Of View
const aspect = container.clientWidth / container.clientHeight; // aspect ratio of our scene
const near = 0.1; // Near clipping plane (the small end of the frustum) => anything closer to the camera than this will be invisible.
const far = 100; // Far clipping plane (the large end of the frustum) => anything further away from the camera than this will be invisible.
const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry that defines the shape of the mesh
// we'll use BoxBufferGeometry to create a 3D Cube
const width = 2;
const height = 2;
const depth = 2;
const geometry = new BoxBufferGeometry(width, height, depth);

// create a material that defines how the surface of our mesh looks
const color = new Color('#ffffff');
const wireframe = true;
const material = new MeshBasicMaterial();

// create a mesh which is a visible object that is used to display 3D objects
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create a renderer which will draw our object on the canvas
const renderer = new WebGLRenderer();

// set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element by the renderer to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
