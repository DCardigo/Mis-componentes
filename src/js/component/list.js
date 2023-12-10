import React, { useState, useEffect } from "react";



const List = () => {

	const [items, setItems] = useState([]);
	const [list, setList] = useState(false);

	//   AÑADIR ELEMENTO

	const addItem = (newItem) => {
		 if (items.includes(newItem) === false) {
			setItems([...items, newItem])}
}

	//   ELIMINAR ELEMENTO

	const removeItem = (tarea, i) => {
		const updatedItems = items.filter((item, i) => item[i] != tarea[i]);
		setItems(updatedItems);
		setPrueba(false);

	};

	const newList = items.map(function (item, i) {
		
			return (

				<li className="list-group-item px-2 float-start " id={i} key={i}>

					{i + 1}. {item}

					<button type="button" onClick={() => removeItem(item)} className="btn float-end px-2 py-0" aria-label="Close">x</button>

				</li>

			)
		})


	return (
		<div className="text-center" id="lista">
			<h2>Selecciona tus 5 habilidades</h2>

			<div className="caja1 d-flex">

				{/* Dropdown */}
				<div className="dropdown col-8 text-center">
					{(items.length != 0) ?
					<ul className="lista2 list-group  d-flex col-8 shadow-lg5 bg-body rounded ">
						{newList}
					</ul> : null }
					{/* <div className="newList d-flex col-8 shadow-lg5 bg-body rounded">
						{newList}
					</div> */}
					
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<p className="dropdown-item" onClick={() => addItem('React')} href="#">React</p>

						</li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				<div className="hab-list col-4 ">
					<p className="fw-bold">Habilidades sugeridas</p>
					<button onClick={() => addItem('Html')}>+ Html</button>
				</div>

			</div>
		</div>

	);
};

export default List;