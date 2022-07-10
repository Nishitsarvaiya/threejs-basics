import { BoxBufferGeometry, Color, Mesh, MeshStandardMaterial } from 'three';

/**
 * Creates a Cube with MeshStandardMaterial
 *
 * @param {number} width : width of the cube;
 * @param {number} height : height of the cube;
 * @param {number} depth : depth of the cube;
 * @param {string} color : color of the cube;
 * @param {boolean} wireframe : decides whether wireframe should be enabled or not;
 * @returns
 */
const createCube = (width = 1, height = 1, depth = 1, color = '#ffffff', wireframe = false) => {
	// create a geometry that defines the shape of the mesh
	// we'll use BoxBufferGeometry to create a 3D Cube
	const geometry = new BoxBufferGeometry(width, height, depth);

	// a physically corrent standar material
	const material = new MeshStandardMaterial({ color: new Color(color), wireframe: wireframe });

	// create a mesh which is a visible object that is used to display 3D objects
	const cube = new Mesh(geometry, material);

	cube.rotation.set(0.3, 0.5, 0);

	return cube;
};

export default createCube;
