import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						{/* <div className="contact-logo">
							<Logo width={46} />
						</div> */}
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch!
						</div>

						<div className="subtitle contact-subtitle">
						<p className="first-line">Thanks for checking out my website!</p>
						<p>
							I'm always happy to connect, so feel free to reach out to me on{" "}
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								LinkedIn
							</a>
							. If you have any feedback, questions, or just want to chat, don't hesitate to send me an email at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
							{" "}. I look forward to hearing from you!
						</p>
						</div>

						<div class="gif-container">
							<iframe 
								src="https://giphy.com/embed/xTiTnzkyUDHFYA5ON2" 
								width="200" 
								height="200" 
								allowFullScreen
							></iframe>
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

export default Contact;
