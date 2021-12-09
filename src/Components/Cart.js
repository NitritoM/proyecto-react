import React from "react";
import image1 from "../assets/img/ASFWP (1).jpg";
import image2 from "../assets/img/ASFWP (2).jpg";
import image3 from "../assets/img/ASFWP (3).jpg";

function Cart() {
	return (
		<>
			<section class="printshop printshop--dark m-3">
				<div class="container">
					<div class="printshop__content">
						<div class="row">
							<div class="col-md-12 col-lg-8">
								<div class=".printshop__items">
									<div class=".items__product pb-4">
										<div class="row">
											<div class="col-md-8 pb-4">
												<div class="product__info">
													<div class="row">
														<div class="col-md-5 info__product-name">
															<div class="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div class="product-name__product-info">
																	<div>
																		Proyect: <span class="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span class="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" class="form-control quantity__quantity-input" />
														</div>
														<div class="col-md-3 info__price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<img class="img-fluid mx-auto d-block image" src={image1} alt="Imagen3" />
											</div>
										</div>
									</div>
									<div class=".items__product pb-4">
										<div class="row">
											<div class="col-md-8">
												<div class="product__info">
													<div class="row">
														<div class="col-md-5 info__product-name">
															<div class="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div class="product-name__product-info">
																	<div>
																		Proyect: <span class="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span class="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" class="form-control quantity__quantity-input" />
														</div>
														<div class="col-md-3 price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<img class="img-fluid mx-auto d-block image" src={image2} alt="Imagen2" />
											</div>
										</div>
									</div>
									<div class=".items__product pb-4">
										<div class="row">
											<div class="col-md-8">
												<div class="product__info">
													<div class="row">
														<div class="col-md-5 info__product-name">
															<div class="info__product-name">
																<a href="#">Lorem Ipsum dolor</a>
																<div class="product-name__product-info">
																	<div>
																		Proyect: <span class="product-info__value">Project 1</span>
																	</div>
																	<div>
																		Place: <span class="product-info__value">Somewhere</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-md-4 info__quantity">
															<label for="quantity">Quantity:</label>
															<input id="quantity" type="number" value="1" class="form-control quantity__quantity-input" />
														</div>
														<div class="col-md-3 price">
															<span>$120</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-3">
												<img class="img-fluid mx-auto d-block image" src={image3} alt="imagen1" />
											</div>
										</div>
									</div>
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
}

export default Cart;
