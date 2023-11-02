import React, { useState, useEffect } from "react";
import Star from "../component/star.js";
import Step from "../component/step.js";
import List from "../component/list.js";





const Home = () => {

	const [isStar, setIsStar] = useState(false);
	const [isStep, setIsStep] = useState(false);
	const [isList, setIsList] = useState(false);

	const handlerState = () => {
		setIsStar(false)
		setIsStep(false)
		setIsList(false)
	}


	const handlerStar = (e) => {
		e.preventDefault()
		setIsStar(!isStar)
	}
	const handlerStep = (e) => {
		e.preventDefault()
		setIsStep(!isStep)
	}
	const handlerList = (e) => {
		e.preventDefault()
		setIsList(!isList)
	}


	return (

		<div>

			{(isStar === true) ?

				<Star />

				: (isStep === true) ?

					<Step />

					: (isList === true) ?

						<List />

						: <div className="box">
							<button className="ico star mx-auto" onClick={handlerStar}><i className="far fa-star"></i></button>
							<button className="ico step mx-auto" onClick={handlerStep}><i className="fab fa-wpforms mx-1"></i></button>
							<button className="ico list mx-auto" onClick={handlerList}><i className="fas fa-list-ul"></i></button>
							
						</div>
			}

			{/* <button className="home" onClick={handlerState}><p>HOME</p></button> */}

		</div>
	);
};

export default Home;
