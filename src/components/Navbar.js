import React from "react";

//Importing Logo
import Logo from "../img/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="logo">
					<h2>
						CANTATE <br /> DOMINO <br /> PROJECT
					</h2>
					<img src={Logo} alt="CANTATE DOMINO PROJECT" />
				</div>

				<ul>
					<Link to="/">
						<li>Inicio</li>
					</Link>
					<Link to="/planes">
						<li>Planes</li>
					</Link>
					<Link to="/nosotros">
						<li>Nosotros</li>
					</Link>
					<Link to="/contacto">
						<li>Contacto</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
