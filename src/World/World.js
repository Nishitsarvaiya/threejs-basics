import { createCamera, createScene, createCube, createLight } from './components';
import { createRenderer, Resizer } from './systems';

/**
 * a Class representing the World
 */
class World {
	#camera;
	#scene;
	#renderer;
	// create an instance of the World App
	constructor(container) {
		this.#camera = createCamera(90, 1, 0.1, 200);
		this.#scene = createScene();
		this.#renderer = createRenderer();
		container.append(this.#renderer.domElement);

		const cube = createCube(2, 2, 2, 'white');
		const light = createLight('#ffffff', 4);
		this.#scene.add(cube, light);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
	}

	// render the scene
	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}
}

export default World;
