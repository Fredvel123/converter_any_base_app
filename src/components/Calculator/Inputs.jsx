import React from 'react';

function Inputs({ type, setState }) {
	const handlerInput = (e) => {
		setState(e.target.value);
	};
	return (
		<div>
			<input type={type} onChange={handlerInput} />
		</div>
	);
}

export default Inputs;
