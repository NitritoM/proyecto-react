import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import CartItem from "./CartItem";
import Summary from "./Summary";

const Cart = () => {
	const value = useContext(cartContext);
	let auxarr = value.checkItem();
    
	

	return (
		<>
			<section className="printshop printshop--dark m-3">
				<div className="container">
					<div className="printshop__content">
						<div className="row">
							<div className="col-md-12 col-lg-8">
								<div className=".printshop__items">
									{auxarr.map((value) => {
										return (
											<CartItem
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
							<Summary/>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		</>
	);
};

export default Cart;
