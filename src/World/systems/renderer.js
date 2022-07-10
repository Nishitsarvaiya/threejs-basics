import { WebGLRenderer } from 'three';

/**
 * Creates a WebGL renderer
 * @returns {WebGLRenderer}
 */
const createRenderer = () => {
	const renderer = new WebGLRenderer();

	// Turning on the physically correct lights for physically corrent rendering
	renderer.physicallyCorrectLights = true;
	return renderer;
};

export default createRenderer;
