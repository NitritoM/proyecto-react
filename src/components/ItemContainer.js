import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import Summary from "./Summary";
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query } from "firebase/firestore";

const ItemContainer = (props) => {
	const [stateData, setStateData] = useState([]);
	const [newData, setNewData] = useState();
	const { Id } = useParams();
	const db = getFirestore();

	useEffect(() => {
		switch (Id) {
			case "1":
				const q = query(collection(db, "Items"), where("project", "==", "Danza"));
				getDocs(q).then((res) => {
					setStateData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				});
				break;
			case "2":
				const r = query(collection(db, "Items"), where("project", "==", "Vejez"));
				getDocs(r).then((res) => {
					setStateData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				});
				break;
			case "3":
				const s = query(collection(db, "Items"), where("project", "==", "Belleza"));
				getDocs(s).then((res) => {
					setStateData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				});
				break;
			default:
				const data = collection(db, "Items");
				getDocs(data).then((res) => {
					setStateData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				});
				break;
		}
	}, [Id]);

	return (
		<>
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="printshop__content">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className=".printshop__items">
									{stateData.map((value) => {
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
