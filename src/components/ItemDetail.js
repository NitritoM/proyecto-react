import React from "react";
import Contador from "./ItemCount";

const ItemDetail = (props) => {
	window.addEventListener('click',()=>{
        console.log("clcik padre")
    })
    const handleClick = ()=>{
        
    }

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
					<Contador />
				</div>
				<div>
				<button type="button" className="btn btn-primary btn-sm" onClick={handleClick} >Agregar al Carrito</button>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
