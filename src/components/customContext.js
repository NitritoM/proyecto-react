import cartContext from "../context/cartContext";
import React, { useState } from "react";

function CustomContext({ children }) {
	const [count, setCount] = useState(0);
	let arr = [];
	let total = 0;

	function setTotal() {
		total = arr.reduce((sum, value) => parseInt(sum) + parseInt(value.price), 0);

		return total;
	}

	function addItem(value) {
		arr.push(value);
		let amount = arr.length;
		setCount(count + amount);
		console.log(count);
		console.log("count");
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

	return <cartContext.Provider value={{ addItem, checkItem, eventHelper, removeItem, setTotal, count }}>{children}</cartContext.Provider>;
}

export default CustomContext;
