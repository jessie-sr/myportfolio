import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import DetailWorks from "../components/homepage/detail-works";
import Article from "../components/homepage/article";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const JackOTranslate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "jackotranslate");

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
					<div className="about-logo-container">
						{/* <div className="about-logo">
							<Logo width={46} />
						</div> */}
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.jackotranslate.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.jackotranslate.description}
										<Link to={"/article/1" } style={{ color: "#14b8a6", marginLeft: "5px" }}>
											More{" "}
										</Link>
									<div className="homepage-article-link" style={{ marginTop: '10px'}}>
										<Link to={"https://github.com/jessie-sr/jack-o-translate"}>
											View project on Github{" "}
											<FontAwesomeIcon
												style={{ fontSize: "10px" }}
												icon={faChevronRight}
											/>
										</Link>
										<Link to={"https://jack-o-translate-893de48ebf65.herokuapp.com"} style={{marginLeft: '50px'}}>
											Check the live app here!{" "}
											<FontAwesomeIcon
												style={{ fontSize: "10px"}}
												icon={faChevronRight}
											/>
										</Link>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="jackotranslate.jpg"
											alt="jackotranslate"
											className="about-image"
										/>
									</div>
								</div>

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default JackOTranslate;
