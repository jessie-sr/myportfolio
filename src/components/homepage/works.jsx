import React from "react";
import { faBriefcase, faFaceGrin, faSchool, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="EDUCATION"
				body={
					<div className="works-body">
                        <div className="work">
							<img
								src="./upenn.png"
								alt="upenn"
								className="work-image"
							/>
							<div className="work-title">University of Pennsylvania</div>
							<div className="work-subtitle">
                                M.S. Computer Science
							</div>
							<div className="work-duration">Aug 2024 - Present</div>
						</div>

                        <div className="work">
							<img
								src="./ucb.png"
								alt="ucb"
								className="work-image"
							/>
							<div className="work-title">University of California, Berkeley</div>
							<div className="work-subtitle">
								Visiting Student - CS Track
							</div>
							<div className="work-duration">Jan 2023 - Dec 2023</div>
						</div>

						<div className="work">
							<img
								src="./sufe.png"
								alt="sufe"
								className="work-image"
							/>
							<div className="work-title">Shanghai University of Finance and Economics</div>
							<div className="work-subtitle">
                                B.S. Accounting (ACCA)
							</div>
							<div className="work-duration">Sep 2020 - Jun 2024</div>
						</div>
					</div>
				}
			/>

			<Card
				icon={faBriefcase}
				title="EXPERIENCE"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./dashmote.png"
								alt="dashmote"
								className="work-image"
							/>
							<div className="work-title">Dashmote Netherlands, Inc</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Mar 2024 - Aug 2024</div>
						</div>

						<div className="work">
							<img
								src="./swoop.png"
								alt="swoop"
								className="work-image"
							/>
							<div className="work-title">Swoop Studio</div>
							<div className="work-subtitle">
								Full-Stack Developer
							</div>
							<div className="work-duration">Jan 2024 - Jun 2024</div>
						</div>

						<div className="work">
							<img
								src="./tencent.png"
								alt="tencent"
								className="work-image"
							/>
							<div className="work-title">Tencent</div>
							<div className="work-subtitle">
								Data Analyst Intern
							</div>
							<div className="work-duration">Apr 2022 - May 2022</div>
						</div>
					</div>
				}
			/>

			{/* <Card
				icon={faFaceGrin}
				title="Campus Involvement"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ey.png"
								alt="ey"
								className="work-image"
							/>
							<div className="work-title">Ernst & Young</div>
							<div className="work-subtitle">
								Campus Ambassador
							</div>
							<div className="work-duration">Sep 2022 - Jun 2022</div>
						</div>

						<div className="work">
							<img
								src="./eyh.png"
								alt="eyh"
								className="work-image"
							/>
							<div className="work-title">Expanding Your Horizons at Berkeley</div>
							<div className="work-subtitle">
								Volunteer
							</div>
							<div className="work-duration">Mar 2023</div>
						</div>

						<div className="work">
							<img
								src="./sufe.png"
								alt="sufe"
								className="work-image"
							/>
							<div className="work-title">Shanghai University of Finance and Economics</div>
							<div className="work-subtitle">
								Alumni Outreach Volunteer
							</div>
							<div className="work-duration">Jul 2022 - Aug 2022</div>
						</div>
						
					</div>
				}
			/> */}
		</div>
	);
};

export default Works;
