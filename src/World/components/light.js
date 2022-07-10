import { DirectionalLight } from 'three';

/**
 * Creates a Directional Light
 * @param {string} color : color of the light;
 * @param {number} intensity : intensity of the light;
 * @returns {DirectionalLight}
 */
const createLight = (color = '#ffffff', intensity = 8) => {
	const light = new DirectionalLight(color, intensity);
	light.position.set(10, 10, 10);
	return light;
};

export default createLight;
