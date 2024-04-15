import "../styles/_Skills.scss";
const Skills = () => {
	return (
		<div className="skills-container">
			<h2>skills</h2>
			<p>
				Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías.
				Estos son algunos de los principales lenguajes, tecnologías,
				herramientas y plataformas con los que he trabajado:
			</p>
			<h4>Languages</h4>
			<div className="languages">
				<i class="devicon-html5-plain colored">
					<p>html5</p>
				</i>
				<i class="devicon-css3-plain colored">
					<p>css3</p>
				</i>
				<i class="devicon-javascript-plain colored">
					<p>javascript</p>
				</i>
			</div>
			<h4>frameworks</h4>
			<div className="frameworks">
				<i class="devicon-react-original colored">
					<p>react</p>
				</i>
				<i class="devicon-sass-original colored">
					<p>sass</p>
				</i>
				<i class="devicon-materialui-plain colored">
					<p>material ui</p>
				</i>
				<i class="devicon-bulma-plain colored">
					<p>bulma</p>
				</i>
			</div>
			<h4>tools</h4>
			<div className="tools">
				<i class="devicon-git-plain colored">
					<p>git</p>
				</i>
				<i class="devicon-github-original colored">
					<p>github</p>
				</i>
				<i class="devicon-trello-plain-wordmark colored">
					<p>trello</p>
				</i>
				<i class="devicon-postman-plain colored">
					<p>postman</p>
				</i>
				<i class="devicon-apple-original">
					<p>ios</p>
				</i>
			</div>
		</div>
	);
};
export default Skills;
