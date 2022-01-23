import cartContext from "../context/cartContext";
import React from "react";

function CustomContext({ children }) {
	let arr = [];
	let total = 0;

	function setTotal() {
		total = arr.reduce((sum, value) => parseInt(sum) + parseInt(value.price), 0);
		console.log(total);
		return total;
	}

	function addItem(value) {
		arr.push(value);
	}

	function removeItem(value) {
		let index = arr.findIndex((i) => i.id === value.id);
	}

	function checkItem() {
		return arr;
	}

	function eventHelper(params) {
		const event = new CustomEvent("evento");
		window.dispatchEvent(event);
	}

	return <cartContext.Provider value={{ addItem, checkItem, eventHelper, removeItem, setTotal }}>{children}</cartContext.Provider>;
}

export default CustomContext;
