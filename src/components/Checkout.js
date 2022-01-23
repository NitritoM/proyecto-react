import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query } from "firebase/firestore";


const Checkout = () => {
	const value = useContext(cartContext);
	let auxarr = value.checkItem();
	let total = value.setTotal();
	const db = getFirestore();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			nombre: e.target[0].value,
			apellido: e.target[1].value,
			documento: e.target[2].value,
			email: e.target[3].value,
			telefono: e.target[4].value,
			compra: auxarr,
			total: total,
		};
		const data = collection(db, "buyers");
		addDoc(data, newItem).then((res) => {
			console.log(res.id);
		});
		console.log(newItem);
	};

	return (
		<>
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="row">
						<form onSubmit={handleSubmit}>
							<div class="form-row d-inline-flex col-12">
								<div class="form-group col-md-6 m-2">
									<label for="inputNombre">Nombre</label>
									<input type="text" class="form-control" id="inputNombre" name="inputNombre" required />
								</div>
								<div class="form-group col-md-6 m-2">
									<label for="inputApellido">Apellido</label>
									<input type="text" class="form-control" id="inputApellido" name="inputApellido" required />
								</div>
							</div>
							<div class="form-row d-inline-flex col-12">
								<div class="form-group col-md-3 m-2">
									<label for="inputDocumento">Documento</label>
									<input type="text" class="form-control" id="inputDocumento" name="inputDocumento" placeholder="123456789" required />
								</div>
								<div class="form-group col-md-9 m-2">
									<label for="inputEmail">E-Mail</label>
									<input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="algunemail@algunproveedor.com" required />
								</div>
							</div>

							<div class="form-row d-inline-flex col-12">
								<div class="form-group col-md-6 m-2">
									<label for="inputTelefono">Telefono</label>
									<input type="text" class="form-control" id="inputTelefono" name="inputTelefono" />
								</div>
							</div>

							<button type="submit" class="btn btn-primary m-3">
								Pagar
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Checkout;
