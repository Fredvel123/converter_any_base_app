import React from 'react';
import { useState } from 'react';
import Inputs from './Inputs';

function Calculator() {
	const [number, setNumber] = useState(null);

	const handlerSubmit = (e) => {
		e.preventDefault();
		console.log(number);
	};

	return (
		<div>
			<h2>Calculator</h2>
			<form action="" onSubmit={handlerSubmit}>
				<Inputs type="number" setState={setNumber} />
				<button>Converter</button>
			</form>
		</div>
	);
}

export default Calculator;
