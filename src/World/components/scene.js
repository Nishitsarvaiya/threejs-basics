import { Color, Scene } from 'three';

function createScene(color = '#181818') {
	const scene = new Scene();
	scene.background = new Color(color);
	return scene;
}

export default createScene;
