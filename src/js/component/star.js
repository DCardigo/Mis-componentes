import React, { useState, useEffect } from "react";



const Star = () => {
	
	const [star1, setStar1] = useState(false)
	const [star2, setStar2] = useState(false)
	const [color, setColor] = useState('rgba(210, 210, 210, 0.61)');
	const [color1, setColor1] = useState('rgba(210, 210, 210, 0.61)');
	const [enter, setEnter] = useState(1)
	const [enter1, setEnter1] = useState(1)

	const handleMouseEnter1 = () => {
		setStar1(!star1)
		setEnter(enter + 1)
		setColor('rgb(255, 217, 0)');
		console.log(enter);
		console.log(star1);
	};

	const handleMouseLeave1 = () => {
		if ( star2 == false && enter % 2 === 1){setColor('rgba(210, 210, 210, 0.61)') && setStar1(!star1)}
		console.log(star1);
	};
	
	
	const handleMouseEnter2 = () => {
		setStar2(!star2)

		if (star1 == true){setColor1('rgb(255, 217, 0)') }
		if (star1 == true){setEnter1(enter1 + 1)}
		
		console.log(enter1);
	};

	const handleMouseLeave2 = () => {
		if (enter1 % 2 === 1){setColor1('rgba(210, 210, 210, 0.61)')&& setStar2(!star2)}
	};

	return (
		<div className="box">

			<div className="text-center " id="star">
				<h2>¿Qué puntuación das a este componente?</h2>
				<div>
					<i id="estrella" className="fas fa-star" style={{ color: color }} onMouseEnter={handleMouseEnter1}
						onMouseLeave={handleMouseLeave1}></i>
					<i id="estrella" className="fas fa-star" style={{ color: color1 }} onMouseEnter={handleMouseEnter2}
						onMouseLeave={handleMouseLeave2}></i>
					{/* <i id="estrella" className="fas fa-star" style={{ color: color }} onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}></i>
					<i id="estrella" className="fas fa-star" style={{ color: color }} onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}></i>
					<i id="estrella" className="fas fa-star" style={{ color: color }} onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}></i> */}
				</div>

				<p>Este es el contenido del modal</p>
			</div>

		</div>
	);
};

export default Star;