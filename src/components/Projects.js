import "../styles/_Projects.scss";
import buscadorPeliculas from "../images/buscadorPeliculas.png";

const Projects = () => {
	return (
		<div>
			<h1>projects</h1>
			<div className="container-projects">
				<div className="box-projects">
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
					<span className="react">react</span>
					<span className="sass">sass</span>
					<span className="mui">material ui</span>
				</div>
			</div>
		</div>
	);
};
export default Projects;
