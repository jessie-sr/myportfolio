import React from "react";
import { faBriefcase, faFaceGrin, faSchool, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Academic = () => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Academic Background"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sufe.png"
								alt="sufe"
								className="work-image"
							/>
							<div className="work-title">Shanghai University of Finance and Economics</div>
							<div className="work-subtitle">
								Accounting (ACCA)
							</div>
							<div className="work-duration">Sep 2020 - Jun 2024</div>
						</div>

						<div className="work">
							<img
								src="./ucb.png"
								alt="ucb"
								className="work-image"
							/>
							<div className="work-title">University of California, Berkeley</div>
							<div className="work-subtitle">
								Visiting Student - Computer Science Track
							</div>
							<div className="work-duration">Jan 2023 - Dec 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Academic;
