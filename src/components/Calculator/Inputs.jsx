import React from 'react';

function Inputs({ type, setState, placeh }) {
	const handlerInput = (e) => {
		setState(e.target.value);
	};
	return (
		<div>
			<input type={type} onChange={handlerInput} placeholder={placeh} />
		</div>
	);
}

export default Inputs;
