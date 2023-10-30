import React, { useState, useEffect } from "react";



const Star = () => {

	const [star1, setStar1] = useState()
	const [star2, setStar2] = useState()
	const [star3, setStar3] = useState()
	const [star4, setStar4] = useState()
	const [star5, setStar5] = useState()
	const [count1, setCount1] = useState(false)
	const [count2, setCount2] = useState(false)
	const [count3, setCount3] = useState(false)
	const [count4, setCount4] = useState(false)
	const [count5, setCount5] = useState(false)

	const handlerClick5 = () =>{
		setCount5(!count5);
		console.log(count5);
		if (count5  === true){
			setStar1()
			setStar2()
			setStar3()
			setStar4()
			setStar5()
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
			setStar4('rgb(255, 217, 0)')
			setStar5('rgb(255, 217, 0)');
		}
	}

	const handlerClick1 = () =>{
		console.log(count1);
		setCount1(!count1);
		if (count1  === true){
			setStar1()
		} else{
			setStar1('rgb(255, 217, 0)');
		}
		if (count2  === true || count3  === true || count4  === true || count5  === true){
			setStar2()
			setStar3()
			setStar4()
			setStar5()
		}
	}
	const handlerClick2 = () =>{
		console.log(count2);
		setCount2(!count2);
		if (count2  === true){
			setStar1()
			setStar2()
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
		}
		if (count3  === true || count4  === true || count5  === true){
			
			setStar3()
			setStar4()
			setStar5()
		}
	}
	const handlerClick3 = () =>{
		console.log(count3);
		setCount3(!count3);
		if (count3  === true){
			setStar1()
			setStar2()
			setStar3()
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
		}
		if (count4  === true || count5  === true){
			
			setStar4()
			setStar5()
		}
	}
	const handlerClick4 = () =>{
		console.log(count4);
		setCount4(!count4);
		if (count4 === true){
			setStar1()
			setStar2()
			setStar3()
			setStar4()
		} else{
			setStar1('rgb(255, 217, 0)')
			setStar2('rgb(255, 217, 0)')
			setStar3('rgb(255, 217, 0)')
			setStar4('rgb(255, 217, 0)')
		}
		if (count5  === true){
			
			setStar5()
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