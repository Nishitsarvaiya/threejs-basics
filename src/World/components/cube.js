import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial } from 'three';

function createCube(width = 1, height = 1, depth = 1, color = '#ffffff', wireframe = false) {
	// create a geometry that defines the shape of the mesh
	// we'll use BoxBufferGeometry to create a 3D Cube
	const geometry = new BoxBufferGeometry(width, height, depth);

	// create a material that defines how the surface of our mesh looks
	const material = new MeshBasicMaterial({ color: new Color(color), wireframe: wireframe });

	// create a mesh which is a visible object that is used to display 3D objects
	const cube = new Mesh(geometry, material);

	return cube;
}

export default createCube;
