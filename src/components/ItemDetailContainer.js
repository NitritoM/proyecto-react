import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
	const [state, setState] = useState([]);

	const getData = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([{ id: 1, name: "Bailarina de Marinera", project: "Las mil danzas de Peru", place: "San Lazaro - Arequipa", img: "img/ASFWP (1).jpg", price: "120$" }]);
		}, 2000);
	});

	useEffect(() => {
		getData.then((res) => setState(res));
	}, []);

	return (
		<>
			<div className="row justify-content-center">
				<div className="col-md-4 info__product-name justify-content-center">
					{state.map((value) => {
						console.log(value.img);
						return <ItemDetail key={value.id} name={value.name} project={value.project} place={value.place} img={value.img} price={value.price} />;
					})}
				</div>
			</div>
		</>
	);
};

export default ItemDetailContainer;
