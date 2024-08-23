import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import ProgrammingLanguageSvg from "../data/programming-languages.svg";
import SkillSvg from "../data/skills.svg";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						{/* <div className="projects-logo">
							<Logo width={46} />
						</div> */}
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Welcome to my project showcase!
						</div>

						<div className="subtitle projects-subtitle">
							My work so far spans a diverse array of technologies and challenges, from full-stack web applications to cutting-edge AI-driven tools, each reflecting my journey of continuous learning and exploration, where curiosity meets code and creativity merges with problem-solving. I’ve tackled everything from building robust backends, optimizing database management to designing intuitive user interfaces, always driven by a passion to create solutions that are not only functional but also impactful.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
