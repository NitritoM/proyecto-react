import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart"

function App() {
	return (
		<div className="App">
			<>
				<Navbar />
				<br/>
				<br/>
				<br/>
				<Cart/>
			</>
		</div>
	);
}

export default App;
