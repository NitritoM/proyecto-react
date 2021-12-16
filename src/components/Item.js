import React from "react";
import Contador from "./ItemCount";

const Item = (props) => {
	return (
		<>
			<div class=".items__product pb-4">
				<div class="row">
					<div class="col-md-8 pb-4">
						<div class="product__info">
							<div class="row">
								<div class="col-md-5 info__product-name">
									<div class="info__product-name">
										<a href="#">{props.name}</a>
										<div class="product-name__product-info">
											<div>
												Proyect: <span class="product-info__value">{props.project}</span>
											</div>
											<div>
												Place: <span class="product-info__value">{props.place}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4 info__quantity">
									<label for="quantity">Quantity:</label>
									<Contador />
								</div>
								<div class="col-md-3 info__price">
									<span>$120</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<img class="img-fluid mx-auto d-block image" src="#" alt="Imagen3" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
