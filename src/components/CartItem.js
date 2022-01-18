import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Contador from "./ItemCount";

import cartContext from "../context/cartContext";

const CartItem = (props) => {
	const value = useContext(cartContext);

	const event = new CustomEvent("clickDetalle", { detal: { blubles: true } });

	const handleClick2 = () => {
		//indow.dispatchEvent(event);
		value.removeItem(props);
	};

	return (
		<>
			<div className=".items__product pb-4">
				<div className="row">
					<div className="col-md-8 pb-4">
						<div className="product__info">
							<div className="row">
								<div className="col-md-5 info__product-name">
									<div className="info__product-name">
										<p>{props.name}</p>
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
									<button type="button" className="btn btn-primary btn-sm" onClick={handleClick2}>
										Eliminar del Carrito
									</button>
									{/* <label for="quantity">Quantity:</label>
									<Contador /> */}
								</div>
								<div className="col-md-3 info__price">
									<span>{props.price} $</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<NavLink to={`/ItemDetailContainer/${props.id}`} className="text-decoration-none navbar__item">
							<img className="img-fluid mx-auto d-block image" src={props.img} alt="Imagen3" />
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
