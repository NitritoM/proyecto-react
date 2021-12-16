import React from "react";
import Item from "./Item";

const Itemlist = [
	{ name: "111", project: "222", place: "333" },
	{ name: "aaa", project: "sss", place: "ddd" },
	{ name: "zzz", project: "xxx", place: "ccc" },
];

const ItemContainer = (props) => {
	const Showitems = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(() => {
				for (const name in Itemlist) {

					<Item name={Itemlist.name} project={Itemlist.project} place={Itemlist.place} />;
				}
			});
		}, 2000);
	});

	return (
		<>
			<section class="printshop printshop--dark m-3">
				<div class="container">
					<div class="printshop__content">
						<div class="row">
							<div class="col-md-12 col-lg-8">
								<div class=".printshop__items">
									{Showitems}

									{/* <Item name="111" project="222" place="333" />
									<Item name="222" project="333" place="444" />
									<Item name="333" project="444" place="555" /> */}
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
