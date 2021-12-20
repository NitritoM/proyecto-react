import React from "react";
import { useEffect, useState } from "react";

const Contador = () => {
	const [cont, setCont] = useState(0);
	useEffect(() => {}, [cont]);

	const increment = () => {
		if (cont < 20) setCont(cont + 1);
	};

	const decrement = () => {
		if (cont > 0) setCont(cont - 1);
	};

	return (
		<>
			<h6>{cont}</h6>
			<button type="button" className="btn btn-primary btn-sm" onClick={increment}>+</button>
			<button type="button" className="btn btn-primary btn-sm" onClick={decrement}>-</button>
		</>
	);
};

export default Contador;
