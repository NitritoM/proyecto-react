import React from "react";

function Summary() {
	return (
		<>
			<div className="printshop__summary">
				<h3>Summary</h3>
				<div className="summary__summary-item">
					<span className="summary__text">Subtotal</span>
					<span className="summary__price">$360</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Discount</span>
					<span className="summary__price">$0</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Shipping</span>
					<span className="summary__price">$0</span>
				</div>
				<div className="summary__summary-item">
					<span className="summary__text">Total</span>
					<span className="summary__price">$360</span>
				</div>
				<button type="button" className="btn btn-primary btn-lg btn-block">
					Checkout
				</button>
			</div>
		</>
	);
}
export default Summary;
