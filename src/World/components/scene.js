import { Color, Scene } from 'three';

/**
 * Creates a new Scene
 * @param {Color} color : background color of the scene;
 * @returns {Scene}
 */
const createScene = (color = '#181818') => {
	const scene = new Scene();
	scene.background = new Color(color);
	return scene;
};

export default createScene;
