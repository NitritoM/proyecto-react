import React, { useState, useEffect } from "react";
import Item from "./Item";

const Itemlist = [
	{ name: "111", project: "222", place: "333" },
	{ name: "aaa", project: "sss", place: "ddd" },
	{ name: "zzz", project: "xxx", place: "ccc" },
];

const ItemContainer = (props) => {
	const [state, setState] = useState([]);

	const getData = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ name: "111", project: "222", place: "333" },
				{ name: "aaa", project: "sss", place: "ddd" },
				{ name: "zzz", project: "xxx", place: "ccc" },
			]);
		}, 3000);
	});

	useEffect(() => {
		getData.then((res) => setState(res));
	}, []);

	return (
		<>
			<section class="printshop printshop--dark m-3">
				<div class="container">
					<div class="printshop__content">
						<div class="row">
							<div class="col-md-12 col-lg-8">
								<div class=".printshop__items">
									{state.map((value) => {
										return <Item name={value.name} project={value.project} place={value.place} />;
									})}
								</div>
							</div>
							<div class="col-md-12 col-lg-4">
								<div class="printshop__summary">
									<h3>Summary</h3>
									<div class="summary__summary-item">
										<span class="summary__text">Subtotal</span>
										<span class="summary__price">$360</span>
									</div>
									<div class="summary__summary-item">
										<span class="summary__text">Discount</span>
										<span class="summary__price">$0</span>
									</div>
									<div class="summary__summary-item">
										<span class="summary__text">Shipping</span>
										<span class="summary__price">$0</span>
									</div>
									<div class="summary__summary-item">
										<span class="summary__text">Total</span>
										<span class="summary__price">$360</span>
									</div>
									<button type="button" class="btn btn-primary btn-lg btn-block">
										Checkout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItemContainer;
