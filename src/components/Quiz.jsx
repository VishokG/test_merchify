import React, { useEffect, useState } from 'react';
import { questions } from '../data/questions';
import "../styles/Quiz.css";

function Quiz() {

	const [state, setState] = useState({
		score: 0,
		currentQuestion: 0,
		submission: false
	});

	const [timer, setTimer] = useState(60);

	function submitAnswer(submission) {
		let selectedOption = -1;
		let increment = 0;
		for(let i = 0; i < 4; i++) {
			let radioButton = document.querySelector(`#q${state.currentQuestion}o${i}`);
			if(radioButton && radioButton.checked) {
				selectedOption = i;
				break;
			}
		}

		if(state.currentQuestion < questions.length && selectedOption === questions[state.currentQuestion].ans) increment++;

		let newState = {
			submission,
			currentQuestion: state.currentQuestion+1,
			score: state.score+increment
		};

		setState(newState)
	}
	
	function handleFormSubmission(e) {
		e.preventDefault();
		submitAnswer(false);
	}

	useEffect(() => {
		let interval = null;
		if(timer > 0) {
			interval = setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		}

		return () => {clearTimeout(interval)};
	});

	if(state.currentQuestion >= questions.length || timer <= 0) {
		if(!state.submission) {
			submitAnswer(true);
		}
		return (
			<div className="submitted_container center_flex">
				<div className="submitted center_flex_col">
				<span>You have successfully submitted</span>
					<br />
				<span className="submission_score">You have scored: {state.score}</span>
				</div>
			</div>
		)
	}

	return (
			<div className="quiz_container center_flex_col">
				<div className="quiz_comp center_flex_col">
					<div className="top_bar center_flex">
						<div className="question_index top_style center_flex">{`${state.currentQuestion+1}/${questions.length}`}</div>
						<div className="timer top_style center_flex">{timer}</div>
					</div>
					<div className="question_sec center_flex_col">
						<div className="q_title">
							Q: {questions[state.currentQuestion].title}
						</div>
						<form className="form_sec center_flex_col" onSubmit={handleFormSubmission}>
							<ul className="options">
								{
									questions[state.currentQuestion].options.map((opt, ind) => {
										return (
											<li className="q_option center_flex" key={"q"+state.currentQuestion+"o"+ind}>
												<label className="option_label" htmlFor={"q"+state.currentQuestion+"o"+ind}>{opt}
												<input type="radio" name={"q"+state.currentQuestion} id={"q"+state.currentQuestion+"o"+ind} className="radio" />
												</label>
											</li>
										)
									})
								}
							</ul>
							<button className="quiz_submit" type="submit">{state.currentQuestion === questions.length-1?"Submit":"Next"}</button>
						</form>
					</div>
				</div>
			</div>
	)
}

export default Quiz;