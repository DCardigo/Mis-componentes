import React, { useState, useEffect } from "react";
import Star from "./star.js";
import Step from "./step.js";
import List from "./list.js";



const Home = () => {
	const [isActive, setIsactive]  = useState(false);

	const handlerClick = (e) => {
		e.preventDefault()
		setIsactive(!isActive)
		console.log(isActive)
	}
	useEffect(() => {

		console.log(isActive);
	}, []);


	return (
		<>
			{(isActive === false) ?
				<div className="box">
					<div className="ico star mx-auto" onClick={handlerClick}><i className="far fa-star"></i></div>
					<div className="ico list mx-auto" onClick={handlerClick}><i className="fas fa-list-ul"></i></div>
					<div className="ico step mx-auto" onClick={handlerClick}><i className="fab fa-wpforms mx-1"></i></div>
				</div>

				:
				<Star />
				// <div className="box">

				// 	<div className="ico star mx-auto d-none"><i className="far fa-star"></i></div>
				// 	<div className="ico list mx-auto d-none"><i className="fas fa-list-ul"></i></div>
				// 	<div className="ico step mx-auto d-none"><i className="fab fa-wpforms mx-1"></i></div>
				// </div>
			}
		</>
	);
};

export default Home;
