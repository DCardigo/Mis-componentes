import React from "react";



const List = () => {
	return (
		<div className="text-center" id="lista">
			<h2>Selecciona tus 5 habilidades</h2>

			<div className="caja1 d-flex">
				
				{/* Dropdown */}
				<div className="dropdown col-8">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				<div className="hab-list col-4 fw-bolder">
					<p>Habilidades sugeridas</p>
				</div>

			</div>
		</div>

	);
};

export default List;