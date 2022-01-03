import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import cartContext from "../context/cartContext";

const ItemDetailContainer = (props) => {
	const [state, setState] = useState([]);
	const { Id } = useParams();
	console.log(Id);

	const value = useContext(cartContext);

	const getData = new Promise((resolve, reject) => {
		setTimeout(() => {
			switch (Id) {
				case "1":
					resolve([
						{
							id: 1,
							name: "Bailarina de Marinera",
							project: "Danza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (1).jpg",
							price: "120$",
						},
					]);
					break;
				case "2":
					resolve([
						{
							id: 2,
							name: "Moreno",
							project: "Vejez",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (2).jpg",
							price: "120$",
						},
					]);
					break;
				case "3":
					resolve([
						{
							id: 3,
							name: "Bailarina de Marinera",
							project: "Belleza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (3).jpg",
							price: "120$",
						},
					]);
					break;

				default:
					resolve([
						{
							id: 1,
							name: "Bailarina de Marinera",
							project: "Las mil danzas de Peru",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (1).jpg",
							price: "120$",
						},
					]);
					break;
			}
		}, 500);
	});

	useEffect(() => {
		getData.then((res) => setState(res));
	}, [Id]);

	return (
		<>
			<div className="row justify-content-center">
				<div className="col-md-4 info__product-name justify-content-center">
					{state.map((value) => {
						return <ItemDetail key={value.id} name={value.name} project={value.project} place={value.place} img={value.img} price={value.price} />;
					})}
				</div>
			</div>
		</>
	);
};

export default ItemDetailContainer;
