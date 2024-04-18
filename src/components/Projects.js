import "../styles/_Projects.scss";
import buscadorPeliculas from "../images/buscadorPeliculas.png";
import buscadorArte from "../images/buscadorArte.png";
import ahorradas from "../images/ahorradas.png";
import generadorMemes from "../images/generadorMemes.png";
import primerPortafolio from "../images/primerPortafolio.png";
import mercadito from "../images/mercadito.png";
import rickandmorty from "../images/rickandmorty.png";
const Projects = () => {
	return (
		<>
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
				<div className="box-projects">
					<img src={buscadorArte} alt="buscador de arte" />
					<h3>buscador de arte</h3>
					<a href="https://buscadordearte.netlify.app/" target="_blanck">
						<button>live</button>
					</a>
					<a href="https://github.com/diazvic/buscadorDeArte" target="_blanck">
						<button>github</button>
					</a>
					<span className="js">javascript</span>
					<span className="html">html</span>
					<span className="sass">sass</span>
				</div>
				<div className="box-projects">
					<img src={ahorradas} alt="control de gastos" />
					<h3>ahorradas</h3>
					<a
						href="https://sofiabernabeicejas.github.io/AhorrADAs/"
						target="_blanck"
					>
						<button>live</button>
					</a>
					<a
						href="https://github.com/SOFIABERNABEICEJAS/AhorrADAs"
						target="_blanck"
					>
						<button>github</button>
					</a>
					<span className="js">javascript</span>
					<span className="html">html</span>
					<span className="bulma">bulma</span>
				</div>
				<div className="box-projects">
					<img src={generadorMemes} alt="generador de memes" />
					<h3>generador de memes</h3>
					<a
						href="https://roci16.github.io/Proyecto-Editor-De-Meme/"
						target="_blanck"
					>
						<button>live</button>
					</a>
					<a
						href="https://github.com/diazvic/Proyecto-Editor-De-Meme"
						target="_blanck"
					>
						<button>github</button>
					</a>
					<span className="js">javascript</span>
					<span className="html">html</span>
					<span className="css">css</span>
				</div>
				<div className="box-projects">
					<img src={primerPortafolio} alt="portafolio" />
					<h3>primer portfolio</h3>
					<a
						href="https://diaz-vic-ada-portafolio.netlify.app/"
						target="_blanck"
					>
						<button>live</button>
					</a>
					<a href="https://github.com/diazvic/ada-portafolio" target="_blanck">
						<button>github</button>
					</a>
					<span className="html">html</span>
					<span className="css">css</span>
					<span>flexbox</span>
				</div>

				<div className="box-projects">
					<img src={mercadito} alt="tienda" />
					<h3>tienda con api de mercado libre</h3>
					<a
						href="https://api-mercadolibre-react.netlify.app/"
						target="_blanck"
					>
						<button>live</button>
					</a>
					<a
						href="https://github.com/diazvic/api-mercadolibre-react"
						target="_blanck"
					>
						<button>github</button>
					</a>
					<span className="react">react</span>
					<span className="mui">material ui</span>
				</div>
				<div className="box-projects">
					<img src={rickandmorty} alt="rick and morty" />
					<h3>rick and morty</h3>
					<a
						href="https://rick-and-morty-api-react.netlify.app/"
						target="_blanck"
					>
						<button>live</button>
					</a>
					<a
						href="https://github.com/diazvic/rick-and-morty-react"
						target="_blanck"
					>
						<button>github</button>
					</a>
					<span className="react">react</span>
					<span className="sass">sass</span>
				</div>
			</div>
		</>
	);
};
export default Projects;
