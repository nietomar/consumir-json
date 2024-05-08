import "./producto.css";
import { Descuento } from "./Descuento";
import { Corazon } from "./Corazon";
import { Boton } from "./Boton";

function Producto() {
	return (
		<div className="card">
			<Descuento></Descuento>
			<Corazon></Corazon>
			<img src="https://picsum.photos/180" alt="Foto del producto" />
			<h4>Nombre</h4>

			<div className="separador">
				<div className="izq">
					<p className="old">$100</p>
					<p className="new">$80</p>
				</div>
				<Boton></Boton>
			</div>
		</div>
	);
}

export default Producto;
