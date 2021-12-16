import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Contador from "./components/ItemCount";
import Item from "./components/Item";
import ItemContainer from "./components/ItemContainer";

function App() {
	return (
		<div className="App">
			<>
				<Navbar />
				<br />
				<br />
				<br />
				<Cart />
				<br />
				<br />
				<br />
				<Contador />
				<br />
				<br />
				<br />
				<ItemContainer/>
				
			</>
		</div>
	);
}

export default App;
