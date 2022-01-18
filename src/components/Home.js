import React from "react";
import Cart from "./Cart";

function Home() {
	return (
		<>
			<div>
				<h2>Esta es la paina de inicio</h2>
			</div>
			<div>
				<p>Esta pagina es una pagina para un fotografo, el cual desea vender los prints de las fotografias mas reconocidas de sus proyectos</p>
				<p>Como no es una tienda para una pagina convencional y es una tienda en donde solo hay un item no veo la utilidad del contador</p>
				<h2>IMPORTANTE: El boton eliminar del carrito si funciona y remueve del array sin embargo se tiene que recargar el carrito volviendo al inicio y regresando</h2>
				<h2>IMPORTANTE2: no logro hacer que se recargue el contador en el carrito</h2>
			</div>
		</>
	);
}
export default Home;
