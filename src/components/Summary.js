import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";
import Checkout from "./Checkout";

function Summary() {
	const value = useContext(cartContext);
	let auxarr = value.checkItem();
	let total = value.setTotal();

	return (
		<>
			<div className="printshop__summary">
				<h3>Summary</h3>
				<div className="summary__summary-item">
					<span className="summary__text">Subtotal </span>
					<span className="summary__price">{total}</span>
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
					<span className="summary__price">{total}</span>
				</div>
				<NavLink to={`/Checkout`} className="text-decoration-none navbar__item">
					<button type="button" className="btn btn-primary btn-lg btn-block">
						Checkout
					</button>
				</NavLink>
			</div>
		</>
	);
}
export default Summary;
