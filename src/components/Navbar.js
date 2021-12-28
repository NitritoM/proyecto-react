import React from "react";
import { NavLink } from "react-router-dom";
import Animate from 'animate.css-react'
import 'animate.css/animate.css' 

function Navbar() {
	return (
		<ul className="list-unstyled components">
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<NavLink to={`/ItemContainer/${0}`} className="text-decoration-none navbar__item">
					Inicio
				</NavLink>
			</li>
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<NavLink to={`/ItemContainer/${1}`} className="text-decoration-none navbar__item">
					Proyecto Danza
				</NavLink>
			</li>
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<NavLink to={`/ItemContainer/${2}`} className="text-decoration-none navbar__item">
					Proyecto Vejez
				</NavLink>
			</li>
			<li className="m-2 animate__animated animate__fadeInLeftBig">
				<NavLink to={`/ItemContainer/${3}`} className="text-decoration-none navbar__item">
					Proyecto Belleza
				</NavLink>
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
