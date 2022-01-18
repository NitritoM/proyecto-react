import React, { useContext } from "react";
import cartContext from "../context/cartContext";

function Summary() {
	const value = useContext(cartContext);
	let auxarr = value.checkItem();
	console.log(auxarr);
	
	let totalAges = auxarr.reduce((sum, value) => ( parseInt(sum) + parseInt(value.price) ), 0);
	console.log(totalAges);

	

	return (
		<>
			<div className="printshop__summary">
				
				<h3>Summary</h3>
				<div className="summary__summary-item">
					<span className="summary__text">Subtotal </span>
					<span className="summary__price">{totalAges}</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Discount </span>
					<span className="summary__price">$0</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Shipping </span>
					<span className="summary__price">$0</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Total </span>
					<span className="summary__price">{totalAges}</span>
				</div>
				<button type="button" className="btn btn-primary btn-lg btn-block">
					Checkout
				</button>
			</div>
		</>
	);
}
export default Summary;
