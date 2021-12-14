import React from "react";
import { useEffect, useState } from "react";

const Contador = () => {
    const [cont, setCont] =useState(0);
	useEffect(() => {

    },[cont]);

    const increment =() =>{
        if (cont < 20)
            setCont(cont+1);
    }

    const decrement =() =>{
        if (cont > 0)
            setCont(cont-1);
    }

	return( 
    <>
    <h1>Contador: {cont}</h1>
    <button onClick={increment}>Aumentar</button>
    <button onClick={decrement}>Disminuir</button>
    </>
    );
};

export default Contador;
