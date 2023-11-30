import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

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
					<div className="projects-logo-container">
						{/* <div className="projects-logo">
							<Logo width={46} />
						</div> */}
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							This is a gallery of the fascinating projects I've created so far.
						</div>

						<div className="subtitle projects-subtitle">
						In my pursuit to innovate for the senior community, 
						I've embarked on several exciting projects that reflect
						 my commitment to leveraging technology for meaningful 
						 purposes. From Wisteria ResiConnect, my first foray into 
						 the world of programming, to Jack O Translate, my most 
						 recent and sophisticated project blending intricate 
						 algorithms with intuitive user interfaces, each project 
						 has been a building block in my journey, refining my 
						 skills and deepening my understanding of how technology 
						 can be harnessed for social good. Through these ventures, 
						 I continue to blend my analytical acumen with my passion 
						 for technology, creating solutions that are both innovative 
						 and impactful.
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
