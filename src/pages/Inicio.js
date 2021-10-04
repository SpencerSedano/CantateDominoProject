import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
						Desarrolla el canto con la ayuda de cantantes profesionales. It is a
						long established fact that a reader will be distracted by the
						readable content of a page when looking at its layout.
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
		</>
	);
};

export default Inicio;
