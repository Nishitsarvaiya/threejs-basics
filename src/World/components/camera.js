import { PerspectiveCamera } from 'three';
/**
 * Creates a Perspective Camera
 *
 * @param {number} fov : Field of View;
 * @param {number} aspect : aspect ratio;
 * @param {number} near : near clipping plane -- smallest end of the Viewing Frustrum;
 * @param {number} far : far clipping plane -- largest end of the Viewing Frustrum;
 * @param {number} x : coordinate on x-axis;
 * @param {number} y : coordinate on y-axis;
 * @param {number} z : coordinate on z-axis;
 * @returns {PerspectiveCamera}
 */
const createCamera = (fov = 35, aspect = 1, near = 0.1, far = 100, x = 0, y = 0, z = 10) => {
	const camera = new PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(x, y, z);
	return camera;
};

export default createCamera;
