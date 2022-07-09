import { createCamera, createScene, createCube } from './components';
import { createRenderer, Resizer } from './systems';

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

		const cube = createCube(2, 2, 2);
		this.#scene.add(cube);
		const cube2 = createCube(1, 1, 1, '#3300ff', true);
		cube2.position.set(3, 2, 5);
		this.#scene.add(cube2);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
	}

	// render the scene
	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}
}

export default World;
