import React, { useContext } from "react";
import Contador from "./ItemCount";
import cartContext from "../context/cartContext";


const ItemDetail = (props) => {
	window.addEventListener("click", () => {
		
	});

	let newItem = [];
	const value = useContext(cartContext);
	
	const event = new CustomEvent("clickDetalle", { detal: { blubles: true } });

	const handleClick = () => {
		//indow.dispatchEvent(event);
		value.addItem(props)
		console.log(value);
	
	};
	const handleClick2 = () => {
		//indow.dispatchEvent(event);
		value.removeItem(props)
	
	};

	return (
		<>
			<img className="img-fluid mx-auto d-block image" src={props.img} alt="Imagen3" />
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
				<div className=" info__price m-4">
					Precio : <span>{props.price}</span>
				</div>
				<div>
					<button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>
						Agregar al Carrito
					</button>
					<button type="button" className="btn btn-primary btn-sm" onClick={handleClick2}>
						Eliminar del Carrito
					</button>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
