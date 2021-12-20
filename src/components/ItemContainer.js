import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemContainer = (props) => {
	const [state, setState] = useState([]);

	const getData = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ id: 1, name: "111", project: "222", place: "333", img: "img/ASFWP (1).jpg" },
				{ id: 2, name: "aaa", project: "sss", place: "ddd", img: "img/ASFWP (2).jpg" },
				{ id: 3, name: "zzz", project: "xxx", place: "ccc", img: "img/ASFWP (3).jpg" },
			]);
		}, 2000);
	});

	useEffect(() => {
		getData.then((res) => setState(res));
	}, []);

	return (
		<>
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="printshop__content">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className=".printshop__items">
									{state.map((value) => {
										console.log(value.img);
										return <Item key={value.id} name={value.name} project={value.project} place={value.place} img={value.img} />;
									})}
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItemContainer;
