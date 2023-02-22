import { React, useState } from "react";

const Inicio = () => {
	const [valor, setValor] = useState(0);

    return (
		<form onSubmit={event => {
			event.preventDefault();
			setValor(event.target.add.value);
			}
		}
		>
			<input type='text' name='add' autoComplete='off'></input>
			<button type='submit'>Valor inicial</button>
			<p>{valor}</p>
		</form>
    )
}

export default Inicio