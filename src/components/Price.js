import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Price() {
	return (
		<div className="container-price">
			<div className="price">
				<div className="consulta">
					<h3>Consulta</h3>
					<h2>S/120</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
					</ul>
					<div className="shop-now cart-consulta">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
				<div className="plan1">
					<h3>PLAN 1 MES</h3>
					<h2>S/280</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
					</ul>
					<div className="shop-now cart-plan1">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
				<div className="plan2">
					<h3>PLAN 2 MESES</h3>
					<h2>S/480</h2>
					<ul>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
						<li>
							<FontAwesomeIcon className="check" icon={faCheck} /> bla bla bla
							bla
						</li>
					</ul>
					<div className="shop-now cart-plan2">
						<FontAwesomeIcon className="cart" icon={faShoppingCart} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Price;
