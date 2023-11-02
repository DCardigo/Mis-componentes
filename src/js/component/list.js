import React, { useState, useEffect } from "react";



const List = () => {

	const [items, setItems] = useState([]);

	const addItem = (newItem) => {
		setItems([...items, newItem]);
	};


	return (
		<div className="text-center" id="lista">
			<h2>Selecciona tus 5 habilidades</h2>

			<div className="caja1 d-flex">

				{/* Dropdown */}
				<div className="dropdown col-8">
					{items.map((item, index) => (
						<div key={index} onClick={() => addItem(item)}>
							{item}
						</div>
					))}
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" onClick={() => addItem('React')} href="#">React</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				<div className="hab-list col-4 ">
					<p className="fw-bold">Habilidades sugeridas</p>
					<button>+ Html</button>
				</div>

			</div>
		</div>

	);
};

export default List;