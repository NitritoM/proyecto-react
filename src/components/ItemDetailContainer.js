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
							price: "120",
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
							price: "121",
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
							price: "122",
						},
					]);
					break;
				case "4":
					resolve([
						{
							id: 4,
							name: "Mar",
							project: "Belleza",
							place: "Mollendo - Arequipa",
							img: "../img/ASFWP (4).jpg",
							price: "123",
						},
					]);
					break;
				case "5":
					resolve([
						{
							id: 5,
							name: "Bailarina de Marinera",
							project: "Belleza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (5).jpg",
							price: "124",
						},
					]);
					break;
				case "6":
					resolve([
						{
							id: 6,
							name: "Bailarina de Marinera",
							project: "Belleza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (6).jpg",
							price: "122",
						},
					]);
					break;
				case "7":
					resolve([
						{
							id: 7,
							name: "Bailarina de Marinera",
							project: "Belleza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (7).jpg",
							price: "120",
						},
					]);
					break;
				case "8":
					resolve([
						{
							id: 8,
							name: "Bailarina de Marinera",
							project: "Danza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (8).jpg",
							price: "120",
						},
					]);
					break;
				case "9":
					resolve([
						{
							id: 9,
							name: "Bailarina de Marinera",
							project: "Danza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (9).jpg",
							price: "130",
						},
					]);
					break;
				case "10":
					resolve([
						{
							id: 10,
							name: "Bailarina de Marinera",
							project: "Danza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (10).jpg",
							price: "121",
						},
					]);
					break;
				case "11":
					resolve([
						{
							id: 11,
							name: "Bailarina de Marinera",
							project: "Danza",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (11).jpg",
							price: "126",
						},
					]);
					break;
				case "12":
					resolve([
						{
							id: 12,
							name: "Bailarina de Marinera",
							project: "Vejez",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (12).jpg",
							price: "1203",
						},
					]);
					break;
				case "13":
					resolve([
						{
							id: 13,
							name: "Bailarina de Marinera",
							project: "Vejez",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (13).jpg",
							price: "33",
						},
					]);
					break;
				case "14":
					resolve([
						{
							id: 14,
							name: "Bailarina de Marinera",
							project: "Vejez",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (14).jpg",
							price: "12",
						},
					]);
					break;
				case "15":
					resolve([
						{
							id: 15,
							name: "Bailarina de Marinera",
							project: "Vejez",
							place: "San Lazaro - Arequipa",
							img: "../img/ASFWP (15).jpg",
							price: "120",
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
							price: "120",
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
