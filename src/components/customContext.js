import cartContext from "../context/cartContext";
import React from "react";

function CustomContext({ children }) {
	let arr = [];

	function addItem(value) {
		arr.push(value);
	}

	function removeItem(value) {
		let index = arr.findIndex((i) => i.id === value.id);

		console.log(index);

		arr.splice(index, 1);
	}

	function checkItem() {
		return arr;
	}

	function eventHelper(params) {
		const event = new CustomEvent("evento");
		window.dispatchEvent(event);
	}

	return <cartContext.Provider value={{ addItem, checkItem, eventHelper, removeItem }}>{children}</cartContext.Provider>;
}

export default CustomContext;
