import React from "react";

function Navbar() {
	return (
		<>
			<ul className="list-unstyled components">
				<li className="m-2 animate__animated animate__fadeInLeftBig">
					<a href="./pages/portfolio.html" className="text-decoration-none navbar__item" target="viewer">
						Porfolio
					</a>
				</li>
				<li className="m-2 animate__animated animate__fadeInLeftBig">
					<a href="./pages/projects.html" className="text-decoration-none navbar__item" target="viewer">
						Projects
					</a>
				</li>
				<li className="m-2 animate__animated animate__fadeInLeftBig">
					<a href="./pages/printshop.html" className="text-decoration-none navbar__item" target="viewer">
						Print Shop
					</a>
				</li>
				<li className="m-2 animate__animated animate__fadeInLeftBig">
					<a href="./pages/contact.html" className="text-decoration-none navbar__item" target="viewer">
						Contact
					</a>
				</li>
				<li className="m-2 animate__animated animate__fadeInLeftBig">
					<a href="./pages/about.html" className="text-decoration-none navbar__item" target="viewer">
						About
					</a>
				</li>
			</ul>
		</>
	);
}

export default Navbar;
