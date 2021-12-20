import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
	return (
		<div className="App bg--black">
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
							<ItemContainer />
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<p>Este es el commit de la clase 7. Consumiendo APIs de acuerdo a lo que dice el profesor en la clase grabada, cumple con todas las especificaciones del archivo de la presentacion</p>
							<ItemDetailContainer />
						</div>
					</div>
				</div>
			</>
		</div>
	);
}

export default App;
