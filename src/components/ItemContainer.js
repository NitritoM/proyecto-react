import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import Summary from "./Summary";

const ItemContainer = (props) => {
	const [state, setState] = useState([]);
	const { Id } = useParams();
	console.log(Id);

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
						{ id: 1, name: "111", project: "222", place: "333", img: "../img/ASFWP (1).jpg" },
						{ id: 2, name: "aaa", project: "sss", place: "ddd", img: "../img/ASFWP (2).jpg" },
						{ id: 3, name: "zzz", project: "xxx", place: "ccc", img: "../img/ASFWP (3).jpg" },
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
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="printshop__content">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className=".printshop__items">
									{state.map((value) => {
										return <Item key={value.id} id={value.id} name={value.name} project={value.project} place={value.place} img={value.img} />;
									})}
								</div>
							</div>
							<div className="col-md-12 col-lg-4">
								<Summary />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItemContainer;
