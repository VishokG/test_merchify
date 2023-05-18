import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Start.css"

function Start() {
	return (
		<>
			<div className="start_container center_flex_col">
				<div className="start_img_container center_flex">
					<img className="start_img" src="assets/excel.png" alt="" />
				</div>
				<div className="desc center_flex_col">
					<h3 className="title">
						MS Excel Quiz
					</h3>
					<p className="info">
						<span className="single_line">This quiz contains questions primarily related to Microsoft Excel and tests your capacity in logical reasoning</span>
						<span className="single_line">You cannot return to change the answers of previous questions</span>
					</p>
					
					<ul className="details">
						<li className="point">1 minute</li>
						<li className="point">5 Questions</li>
						<li className="point">1 Attempt</li>
					</ul>
					<Link to={"/quiz"}><button className="start_btn">Take Quiz</button></Link>
				</div>
			</div>
		</>
	)
}

export default Start;