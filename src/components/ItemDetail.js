import React, { useState, useEffect } from "react";

const ItemDetail = (props) => {
	return (
		<>
			<img className="img-fluid mx-auto d-block image" src={props.img} alt="Imagen3" />
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
				<div className=" info__price">
					<span>{props.price}</span>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
