import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="box">
<button  className="ico star mx-auto"><i class="far fa-star"></i></button >
			<div className="ico star mx-auto"><i class="far fa-star"></i></div>
			<div className="ico list mx-auto"><i class="fas fa-list-ul"></i></div>
			<div className="ico step mx-auto">step</div>
			
		</div>
	);
};

export default Home;
