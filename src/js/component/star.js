import React, { useState, useEffect } from "react";



const Star = () => {

	const [star1, setStar1] = useState()
	const [star2, setStar2] = useState()
	const [star3, setStar3] = useState()
	const [star4, setStar4] = useState()
	const [star5, setStar5] = useState()

	const handlerClick1 = () => {
		setStar1('rgb(255, 217, 0)');
		if (star2 === 'rgb(255, 217, 0)') {
			setStar2()
			setStar3()
			setStar4()
			setStar5()
		}

	}
	const handlerClick2 = () => {
		setStar1('rgb(255, 217, 0)')
		setStar2('rgb(255, 217, 0)')
		if (star3 === 'rgb(255, 217, 0)') {
			setStar3()
			setStar4()
			setStar5()
		}
	}

	const handlerClick3 = () => {
		setStar1('rgb(255, 217, 0)')
		setStar2('rgb(255, 217, 0)')
		setStar3('rgb(255, 217, 0)')
		if (star4 === 'rgb(255, 217, 0)') {
			setStar4()
			setStar5()
		}
	}
	const handlerClick4 = () => {
		setStar1('rgb(255, 217, 0)')
		setStar2('rgb(255, 217, 0)')
		setStar3('rgb(255, 217, 0)')
		setStar4('rgb(255, 217, 0)')
		if (star5 === 'rgb(255, 217, 0)') {
			setStar5()
		}
	}
	const handlerClick5 = () => {
		setStar1('rgb(255, 217, 0)')
		setStar2('rgb(255, 217, 0)')
		setStar3('rgb(255, 217, 0)')
		setStar4('rgb(255, 217, 0)')
		setStar5('rgb(255, 217, 0)')

	}


	const handleMouseEnter1 = () => {
		setStar1('rgb(255, 217, 0, 0.5)')
		if (star2 === 'rgb(255, 217, 0, 0.5)' || star2 === 'rgb(255, 217, 0)') {
			setStar2()
			setStar3()
			setStar4()
			setStar5()
		}

	};

	const handleMouseEnter2 = () => {
		setStar1('rgb(255, 217, 0, 0.5)')
		setStar2('rgb(255, 217, 0, 0.5)')
		if (star3 === 'rgb(255, 217, 0, 0.5)' || star3 === 'rgb(255, 217, 0)') {
			setStar3()
			setStar4()
			setStar5()
		}
	};
	const handleMouseEnter3 = () => {
		setStar1('rgb(255, 217, 0, 0.5)')
		setStar2('rgb(255, 217, 0, 0.5)')
		setStar3('rgb(255, 217, 0, 0.5)')
		if (star4 === 'rgb(255, 217, 0, 0.5)' || star4 === 'rgb(255, 217, 0)') {
			setStar4()
			setStar5()
		}

	};
	const handleMouseEnter4 = () => {
		setStar1('rgb(255, 217, 0, 0.5)')
		setStar2('rgb(255, 217, 0, 0.5)')
		setStar3('rgb(255, 217, 0, 0.5)')
		setStar4('rgb(255, 217, 0, 0.5)')
		if (star5 === 'rgb(255, 217, 0, 0.5)' || star5 === 'rgb(255, 217, 0)') {
			setStar5()
		}
	};

	const handleMouseEnter5 = () => {
		setStar1('rgb(255, 217, 0, 0.5)')
		setStar2('rgb(255, 217, 0, 0.5)')
		setStar3('rgb(255, 217, 0, 0.5)')
		setStar4('rgb(255, 217, 0, 0.5)')
		setStar5('rgb(255, 217, 0, 0.5)')

	};


	return (

		<div className="text-center " id="star">
			<h2 className="mt-5">¿Qué puntuación das a este componente?</h2>
			<div className="mt-4">
				<i id="estrella" className="fas fa-star" style={{ color: star1 }} onMouseEnter={handleMouseEnter1} onClick={handlerClick1}></i>
				<i id="estrella" className="fas fa-star" style={{ color: star2 }} onMouseEnter={handleMouseEnter2} onClick={handlerClick2}></i>
				<i id="estrella" className="fas fa-star" style={{ color: star3 }} onMouseEnter={handleMouseEnter3} onClick={handlerClick3}></i>
				<i id="estrella" className="fas fa-star" style={{ color: star4 }} onMouseEnter={handleMouseEnter4} onClick={handlerClick4} ></i>
				<i id="estrella" className="fas fa-star" style={{ color: star5 }} onMouseEnter={handleMouseEnter5} onClick={handlerClick5} ></i>

			</div>

			{(star1 === 'rgb(255, 217, 0)') || (star2 === 'rgb(255, 217, 0)') || (star3 === 'rgb(255, 217, 0)') || (star4 === 'rgb(255, 217, 0)') || (star5 === 'rgb(255, 217, 0)') ?
				<p className="mt-4 fs-3">Gracias por tu respuesta</p>
				: null}

		</div>
		// <div className="box">


		// </div>


	);
};

export default Star;