import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemContainer from "./components/ItemContainer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";

import Home from "./components/Home";

import CustomContext from "./components/customContext";
import Cart from "./components/Cart";

function App() {
	return (
		<CustomContext>
			<Router>
				<div className="App bg--black h-100 m-0 w-100">
					<>
						<div className="container-fluid d-md-flex h-100 m-0 w-100">
							<div className="row rowmenu d-md-inline-flex m-0">
								<div className="container-fluid col-12">
									<div className="row bg--black">
										{/* Este logo falta definir, no tiene error la programacion */}
										<img className="header__logo" src="#" alt="logoASP" />
									</div>
									<div className="row p-md-4 m-0 p-2 d-md-flex h-75 bg--black">
										<Navbar />
									</div>
								</div>
							</div>
							<div className="row h-100 w-100 p-md-4 m-0 p-2">
								<div className="column col-12">
									<Routes>
										<Route exact path="/" element={<Home />}></Route>
										<Route exact path="/ItemContainer/:Id" element={<ItemContainer />}></Route>
										<Route exact path="/ItemDetailContainer/:Id" element={<ItemDetailContainer />}></Route>
										<Route exact path="/Cart" element={<Cart />}></Route>
									</Routes>

								</div>
							</div>
						</div>
					</>
				</div>
			</Router>
		</CustomContext>
	);
}

export default App;
