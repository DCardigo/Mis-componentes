import React, { useState, useEffect } from "react";



const Star = () => {

	const [star1, setStar1] = useState()
	const [star2, setStar2] = useState()
	const [star3, setStar3] = useState()
	const [star4, setStar4] = useState()
	const [star5, setStar5] = useState()
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)
	const [count3, setCount3] = useState(0)
	const [count4, setCount4] = useState(0)
	const [count5, setCount5] = useState(0)

	const handlerClick5 = () =>{
		setCount5(count5 + 1);
		console.log(count5);
		if (count5 % 2 === 1){
			setStar1('rgba(210, 210, 210, 0.61)')
			setStar2('rgba(210, 210, 210, 0.61)')
			setStar3('rgba(210, 210, 210, 0.61)')
			setStar4('rgba(210, 210, 210, 0.61)')
			setStar5('rgba(210, 210, 210, 0.61)')
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
			setStar4('rgb(255, 217, 0)')
			setStar5('rgb(255, 217, 0)');
		}
	}
	const handlerClick1 = () =>{
		setCount1(count1 + 1);
		if (count1 % 2 === 1){
			setStar1('rgba(210, 210, 210, 0.61)')
		} else{
			setStar1('rgb(255, 217, 0)');
		}
	}
	const handlerClick2 = () =>{
		setCount2(count2 + 1);
		if (count2 % 2 === 1){
			setStar1('rgba(210, 210, 210, 0.61)')
			setStar2('rgba(210, 210, 210, 0.61)')
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
		}
	}
	const handlerClick3 = () =>{
		setCount3(count3 + 1);
		if (count3 % 2 === 1){
			setStar1('rgba(210, 210, 210, 0.61)')
			setStar2('rgba(210, 210, 210, 0.61)')
			setStar3('rgba(210, 210, 210, 0.61)')
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
		}
	}
	const handlerClick4 = () =>{
		setCount4(count4 + 1);
		if (count4 % 2 === 1){
			setStar1('rgba(210, 210, 210, 0.61)')
			setStar2('rgba(210, 210, 210, 0.61)')
			setStar3('rgba(210, 210, 210, 0.61)')
			setStar4('rgba(210, 210, 210, 0.61)')
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
			setStar4('rgb(255, 217, 0)')
		}
	}
	

	// const [color, setColor] = useState('rgba(210, 210, 210, 0.61)');
	// const [color1, setColor1] = useState('rgba(210, 210, 210, 0.61)');
	// const [enter, setEnter] = useState(1)
	// const [enter1, setEnter1] = useState(1)

	// const handleMouseEnter1 = () => {
	// 	setStar1(!star1)
	// 	setEnter(enter + 1)
	// 	setColor('rgb(255, 217, 0)');
	// 	console.log(enter);
	// 	console.log(star1);
	// };

	// const handleMouseLeave1 = () => {
	// 	if ( star2 == false && enter % 2 === 1){setColor('rgba(210, 210, 210, 0.61)') && setStar1(!star1)}
	// 	console.log(star1);
	// };


	// const handleMouseEnter2 = () => {
	// 	setStar2(!star2)

	// 	if (star1 == true){setColor1('rgb(255, 217, 0)') }
	// 	if (star1 == true){setEnter1(enter1 + 1)}

	// 	console.log(enter1);
	// };

	// const handleMouseLeave2 = () => {
	// 	if (enter1 % 2 === 1){setColor1('rgba(210, 210, 210, 0.61)')&& setStar2(!star2)}
	// };

	return (
		<div className="box">

			<div className="text-center " id="star">
				<h2>¿Qué puntuación das a este componente?</h2>
				<div>
					<i id="estrella" className="fas fa-star" style={{ color: star1 }} onClick={handlerClick1}></i>
					<i id="estrella" className="fas fa-star" style={{ color: star2 }} onClick={handlerClick2}></i>
					<i id="estrella" className="fas fa-star" style={{ color: star3 }} onClick={handlerClick3}></i>
					<i id="estrella" className="fas fa-star" style={{ color: star4 }} onClick={handlerClick4}></i>
					<i id="estrella" className="fas fa-star" style={{ color: star5 }} onClick={handlerClick5}></i>
					
				</div>

				<p>Este es el contenido del modal</p>
			</div>

		</div>
	);
};

export default Star;