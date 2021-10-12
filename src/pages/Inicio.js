import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Spacing from "../components/Spacing";
import Price from "../components/Price";

//Images
import Cantando from "../img/cantando.jpg";
import Whatsapp from "../img/whatsapp.png";

const Inicio = () => {
	return (
		<>
			<div className="inicio-container">
				<div className="inicio-texto">
					<h1>Aprende canto desde 0</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta
						unde tempora recusandae adipisci sequi cupiditate ab modi, tenetur
						nesciunt quod. Modi optio nobis repellat, aliquam nostrum nisi
						molestias? Voluptatum.
					</p>
					<button>Más Información</button>
				</div>
				<div className="inicio-img">
					<img src={Cantando} alt="Canta" />
				</div>
			</div>
			<div className="whatsapp-container">
				<img className="whatsapp" src={Whatsapp} alt="Whatsapp" />
			</div>
			<Spacing />
			<Price />
		</>
	);
};

export default Inicio;
