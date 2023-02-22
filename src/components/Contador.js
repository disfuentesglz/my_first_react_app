import { React, useState } from "react";
import Button from "./Button";
import Inicio from "./Input"
const Example = () => {
	const [valor, setValor] = useState(0);

	const sumar = () => {
		setValor(valor+1);
	}
	const reinicar = () => {
		setValor(0);
	}
	const restar = () => {
		setValor(valor-1);
	}
    return (
        <div>
					<p>Contador</p>
					<Inicio></Inicio>
					<p>{valor}</p>
					<Button label="restar" action={restar}></Button>
					<Button label="sumar" action={sumar}></Button>
					<br></br>
					<Button label="reiniciar" action={reinicar}></Button>

        </div>
    )
}

export default Example