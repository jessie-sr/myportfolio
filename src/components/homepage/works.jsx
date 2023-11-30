import React from "react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
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
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Shanghai University of Finance and Economics</div>
							<div className="work-subtitle">
								International Accounting (ACCA)
							</div>
							<div className="work-duration">Sep 2020 - Jul 2024</div>
						</div>

						<div className="work">
							<img
								src="./ucb.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">University of California, Berkeley</div>
							<div className="work-subtitle">
								Visiting Student
							</div>
							<div className="work-duration">Jan 2023 - Dec 2023</div>
						</div>
					</div>
				}
			/>

			<Card
				icon={faBriefcase}
				title="Professional Experiences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tencent.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Shenzhen Tencent Computer System Co. Ltd.</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Mar 2022 - Apr 2022</div>
						</div>

						<div className="work">
							<img
								src="./huaxin.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">China Fortune Securities</div>
							<div className="work-subtitle">
								Macroeconomic Research Intern
							</div>
							<div className="work-duration">Jun 2023 - Nov 2023</div>
						</div>
					</div>
				}
			/>

			<Card
				icon={faBriefcase}
				title="Campus Involvement"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ey.png"
								alt="facebook"
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
								alt="twitter"
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
								alt="twitter"
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
			/>

		</div>
	);
};

export default Works;
