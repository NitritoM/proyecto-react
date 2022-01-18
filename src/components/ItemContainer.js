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
						{ id: 3, name: "zzz", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (3).jpg", price: "121" },
						{ id: 4, name: "111", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (4).jpg", price: "122" },
						{ id: 5, name: "aaa", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (5).jpg", price: "123" },
						{ id: 6, name: "zzz", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (6).jpg", price: "124" },
						{ id: 7, name: "111", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (7).jpg", price: "125" },
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
							price: "126",
						},
						{ id: 12, name: "zzz", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (12).jpg", price: "127" },
						{ id: 13, name: "111", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (13).jpg", price: "128" },
						{ id: 14, name: "aaa", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (14).jpg", price: "129" },
						{ id: 15, name: "zzz", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (15).jpg", price: "130" },
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
							price: "131",
						},
						{ id: 8, name: "aaa", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (8).jpg", price: "132" },
						{ id: 9, name: "zzz", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (9).jpg", price: "133" },
						{ id: 10, name: "111", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (10).jpg", price: "134" },
						{ id: 11, name: "aaa", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (11).jpg", price: "135" },
					]);
					break;

				default:
					resolve([
						{ id: 1, name: "111", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (1).jpg", price: "121" },
						{ id: 2, name: "aaa", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (2).jpg", price: "122" },
						{ id: 3, name: "zzz", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (3).jpg", price: "123" },
						{ id: 4, name: "111", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (4).jpg", price: "124" },
						{ id: 5, name: "aaa", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (5).jpg", price: "125" },
						{ id: 6, name: "zzz", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (6).jpg", price: "126" },
						{ id: 7, name: "111", project: "Belleza", place: "en Algun Lugar", img: "../img/ASFWP (7).jpg", price: "127" },
						{ id: 8, name: "aaa", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (8).jpg", price: "128" },
						{ id: 9, name: "zzz", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (9).jpg", price: "129" },
						{ id: 10, name: "111", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (10).jpg", price: "130" },
						{ id: 11, name: "aaa", project: "Danza", place: "en Algun Lugar", img: "../img/ASFWP (11).jpg", price: "131" },
						{ id: 12, name: "zzz", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (12).jpg", price: "132" },
						{ id: 13, name: "111", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (13).jpg", price: "133" },
						{ id: 14, name: "aaa", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (14).jpg", price: "134" },
						{ id: 15, name: "zzz", project: "Vejez", place: "en Algun Lugar", img: "../img/ASFWP (15).jpg", price: "135" },
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
										return (
											<Item
												key={value.id}
												id={value.id}
												name={value.name}
												project={value.project}
												place={value.place}
												img={value.img}
												price={value.price}
											/>
										);
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
