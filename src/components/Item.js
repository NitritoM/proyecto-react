import React from "react";
import { NavLink } from "react-router-dom";
import Contador from "./ItemCount";

const Item = (props) => {
	return (
		<>
			<div className=".items__product pb-4">
				<div className="row">
					<div className="col-md-8 pb-4">
						<div className="product__info">
							<div className="row">
								<div className="col-md-5 info__product-name">
									<div className="info__product-name">
										<a href="#">{props.name}</a>
										<div className="product-name__product-info">
											<div>
												Project: <span className="product-info__value">{props.project}</span>
											</div>
											<div>
												Place: <span className="product-info__value">{props.place}</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 info__quantity">
									<label for="quantity">Quantity:</label>
									<Contador />
								</div>
								<div className="col-md-3 info__price">
									<span>$120</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<NavLink to="/ItemDetailContainer" className="text-decoration-none navbar__item">
							<img className="img-fluid mx-auto d-block image" src={props.img} alt="Imagen3" />
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default Item;
