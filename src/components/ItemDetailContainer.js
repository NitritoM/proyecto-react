import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import cartContext from "../context/cartContext";
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query } from "firebase/firestore";


const ItemDetailContainer = (props) => {
	const [stateData, setStateData] = useState([]);
	const [newData, setNewData] = useState();
	const { Id } = useParams();
	const db = getFirestore();

	const value = useContext(cartContext);

	useEffect(() => {
		const q = query(collection(db, "Items"), where("name", "==", Id));
		getDocs(q).then((res) => {
			console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
			setStateData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
		});
	}, [Id]);

	return (
		<>
			<div className="row justify-content-center">
				<div className="col-md-4 info__product-name justify-content-center">
					{stateData.map((value) => {
						return <ItemDetail key={value.id} name={value.name} project={value.project} place={value.place} img={value.img} price={value.price} />;
					})}
				</div>
			</div>
		</>
	);
};

export default ItemDetailContainer;
