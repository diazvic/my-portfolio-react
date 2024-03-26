import "../styles/_NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link className="links-navbar" to="/">
						home
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/about">
						about
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/skills">
						skills
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/experience">
						experience
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/projects">
						projects
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/contact">
						contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
