import buscadorPeliculas from "../images/buscadorPeliculas.png";

const Projects = () => {
	return (
		<div>
			<h1>projects</h1>
			<div>
				<img src={buscadorPeliculas} alt="buscador de peliculas" />
				<h3>buscador de peliculas</h3>
				<a
					href="https://diazvic-buscador-de-peliculas.netlify.app/"
					target="_blanck"
				>
					<button>live</button>
				</a>
				<a
					href="https://github.com/diazvic/buscador-de-peliculas"
					target="_blanck"
				>
					<button>github</button>
				</a>
				<span>react</span>
				<span>sass</span>
				<span>material ui</span>
			</div>
		</div>
	);
};
export default Projects;
