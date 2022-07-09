import World from '../World/World';

// create the main function
function main() {
	// get the element that will hold our scene
	const container = document.getElementById('scene');

	// create an instance of the World App
	const world = new World(container);

	// render the scene
	world.render();
}

const button = document.querySelector('.btn-enter');

button.addEventListener('click', () => {
	// call main to start the app
	main();
	document.getElementById('scene').style.display = 'block';
	button.style.display = 'none';
});
