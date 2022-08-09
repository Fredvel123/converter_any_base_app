import React from 'react';
import { useState } from 'react';
import Inputs from './Inputs';
// logic
import convertToAnyBase from '../../logic/convertToAnyBase';
import converterToBaseten from '../../logic/converterToBaseTen';

function Calculator() {
	const [number, setNumber] = useState(null);
	const [base, setBase] = useState(null);
	const [goalBase, setGoalBase] = useState(null);
	const [result, setResult] = useState(null);

	const handlerSubmit = (e) => {
		e.preventDefault();
		const preResult = converterToBaseten(number, base);
		setResult(convertToAnyBase(preResult, goalBase));
	};

	return (
		<div>
			<h2>Calculator</h2>
			<form action="" onSubmit={handlerSubmit}>
				<Inputs type="text" setState={setNumber} placeh="number" />
				<Inputs type="number" setState={setBase} placeh="from" />
				<Inputs type="number" setState={setGoalBase} placeh="to" />
				<button>Converter</button>
			</form>
			<h1>{result}</h1>
		</div>
	);
}

export default Calculator;
