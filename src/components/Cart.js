import React from "react";


function Cart() {
	return (
		<>
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="printshop__content">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className=".printshop__items">
									<div className=".items__product pb-4">
										<div className="row">
											<div className="col-md-8 pb-4">
												<div className="product__info">
													<div className="row">
														<div className="col-md-5 info__product-name">
															<div className="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div className="product-name__product-info">
																	<div>
																		Proyect: <span className="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span className="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" className="form-control quantity__quantity-input" />
														</div>
														<div className="col-md-3 info__price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-3">
												<img className="img-fluid mx-auto d-block image" src="#" alt="Imagen3" />
											</div>
										</div>
									</div>
									<div className=".items__product pb-4">
										<div className="row">
											<div className="col-md-8">
												<div className="product__info">
													<div className="row">
														<div className="col-md-5 info__product-name">
															<div className="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div className="product-name__product-info">
																	<div>
																		Proyect: <span className="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span className="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" className="form-control quantity__quantity-input" />
														</div>
														<div className="col-md-3 price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-3">
												<img className="img-fluid mx-auto d-block image" src="#" alt="Imagen2" />
											</div>
										</div>
									</div>
									<div className=".items__product pb-4">
										<div className="row">
											<div className="col-md-8">
												<div className="product__info">
													<div className="row">
														<div className="col-md-5 info__product-name">
															<div className="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div className="product-name__product-info">
																	<div>
																		Proyect: <span className="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span className="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" className="form-control quantity__quantity-input" />
														</div>
														<div className="col-md-3 price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-3">
												<img className="img-fluid mx-auto d-block image" src="#" alt="imagen1" />
											</div>
										</div>
									</div>
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
}

export default Cart;
