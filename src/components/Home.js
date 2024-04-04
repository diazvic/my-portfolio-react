import Typewriter from "typewriter-effect";
import "../styles/_Home.scss";
import { linkedin, github, mail } from "../utils/Variables";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
	return (
		<section>
			<h1>maria victoria diaz</h1>
			<h2>
				I'm a
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
					<FaLinkedin />
				</a>
				<a href={github}>
					<FaGithub />
				</a>
				<a href={mail}>
					<IoMailOutline />
				</a>
			</div>
		</section>
	);
};
export default Home;
