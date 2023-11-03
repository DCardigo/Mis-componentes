import React, { useState, useEffect } from "react";



const List = () => {

	const [items, setItems] = useState([]);

	const addItem = (newItem) => {
		setItems([...items, newItem]);
	};

	//   ELIMINAR ELEMENTO

	const removeItem = (tarea, i) => {
		const updatedItems = items.filter((item) => item != tarea);
		setItems(updatedItems);

	};


	return (
		<div className="text-center" id="lista">
			<h2>Selecciona tus 5 habilidades</h2>

			<div className="caja1 d-flex">

				{/* Dropdown */}
				<div className="dropdown col-8 text-center">
					{items.map((item, index) => (
						
						<div key={index} onClick={() => addItem(item)} id="seleccion" className="rounded">
							{items.length}. {item}
							<button type="button" onClick={() => removeItem(item, i)} className="btn-close float-end px-2 py-0" aria-label="Close"></button>
						</div>
					))}
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