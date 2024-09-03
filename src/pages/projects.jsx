import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

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
					
					<div className="projects-container">
						<div className="title projects-title">
							Welcome to my project showcase 🙌 !
						</div>

						<div className="subtitle projects-subtitle">
							<div>I have worked on a wide range of projects, from full-stack web applications to AI-driven tools.</div>
							<div>They might not be the coolest, but I take pride in the things I build.</div>
						</div>

						<div className="projects-image-container">
							<div className="projects-image-wrapper">
								<img
									src="project.png"
									alt="project"
									className="projects-image"
								/>
							</div>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>

						<div className="projects-viewmore-link">
							<Link to={INFO.socials.github}>
								View more on my GitHub  {" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</Link>
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
