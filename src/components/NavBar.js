import "../styles/_NavBar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
	const [isMobile, setIsMobile] = useState(true);

	const handleClickHamburguerMobile = () => {
		setIsMobile(!isMobile);
	};
	const handleLinkClick = () => {
		setIsMobile(true);
	};
	return (
		<nav className="navbar">
			<ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
				<li>
					<Link className="links-navbar" to="/" onClick={handleLinkClick}>
						home
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/about" onClick={handleLinkClick}>
						about
					</Link>
				</li>
				<li>
					<Link className="links-navbar" to="/skills" onClick={handleLinkClick}>
						skills
					</Link>
				</li>
				<li>
					<Link
						className="links-navbar"
						to="/projects"
						onClick={handleLinkClick}
					>
						projects
					</Link>
				</li>
				<li>
					<Link
						className="links-navbar"
						to="/contact"
						onClick={handleLinkClick}
					>
						contact
					</Link>
				</li>
				<button
					className="mobile-menu-icon"
					onClick={handleClickHamburguerMobile}
				>
					{isMobile ? (
						<i className="fas fa-bars"></i>
					) : (
						<i className="fas fa-times"></i>
					)}
				</button>
			</ul>
		</nav>
	);
};

export default NavBar;
