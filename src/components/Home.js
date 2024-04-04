import Typewriter from "typewriter-effect";
import "../styles/_Home.scss";

const Home = () => {
	return (
		<section>
			<h1 className="titulo-home">maria victoria diaz</h1>
			<h2>i'm a</h2>
			<Typewriter
				options={{
					strings: ["Frontend Developer"],
					autoStart: true,
					loop: true,
				}}
			/>
		</section>
	);
};
export default Home;
