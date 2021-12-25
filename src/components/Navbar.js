import React from "react";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";

function Navbar() {
	return (
		<ul className="list-unstyled components">
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<Link to="/" className="text-decoration-none navbar__item">
					Inicio
				</Link>
			</li>
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<Link to="/ItemContainer" className="text-decoration-none navbar__item">
					Item Container
				</Link>
			</li>
			{/* <li className="m-2 animate__animated animate__fadeInLeftBig">
				<Link to="/" className="text-decoration-none navbar__item">
					Inicio
				</Link>
			</li>
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<Link to="/" className="text-decoration-none navbar__item">
					Inicio
				</Link>
			</li> */}
		</ul>
	);
}

export default Navbar;
