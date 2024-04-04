import Typewriter from "typewriter-effect";
import "../styles/_Home.scss";
import { linkedin, github, mail } from "../utils/Variables";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
	return (
		<section>
			<h1 className="titulo-home">maria victoria diaz</h1>
			<h2>
				i'm a
				<Typewriter
					options={{
						strings: ["Frontend Developer"],
						autoStart: true,
						loop: true,
					}}
				/>
			</h2>
			<div>
				<a href={linkedin}>
					<FaLinkedin fontSize={25} />
				</a>
				<a href={github}>
					<FaGithub fontSize={25} />
				</a>

				<a href={mail}>
					<IoMailOutline fontSize={25} />
				</a>
			</div>
		</section>
	);
};
export default Home;
