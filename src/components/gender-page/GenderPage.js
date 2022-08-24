import React from "react";
import './GenderPage.css';

const GenderPage = () => {
	return (
		<div className="container">
			<div id="gender-page" className="w-100">
				<a className="prev-pg-link" href="#"></a>
				<h2 className="bold-24">What’s your gender?</h2>
				<div className="gender-wrapper d-flex">
					<input type="radio" id='male' name='gender'/>
					<label className="male" htmlFor="male">
						<img src="images/mail-icon.svg"/>
					</label>
				</div>
			</div>

		</div>
	)
}

export default GenderPage;