import { useEffect } from 'react';

function Inputs({ type, setState, placeh, state, baseIndex, iden }) {
	const hashvalues = {
		1: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z1-9`]/g,
		2: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z2-9`]/g,
		3: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z3-9`]/g,
		4: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z4-9`]/g,
		5: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z5-9`]/g,
		6: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z6-9`]/g,
		7: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z7-9`]/g,
		8: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z8-9`]/g,
		9: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z9-9`]/g,
		10: /[,./<>?;':"|[{}=+_)()*&^%$#@!~A-Z`]/g,
		11: /[,./<>?;':"|[{}=+_)()*&^%$#@!~B-Z`]/g,
		12: /[,./<>?;':"|[{}=+_)()*&^%$#@!~C-Z`]/g,
		13: /[,./<>?;':"|[{}=+_)()*&^%$#@!~D-Z`]/g,
		14: /[,./<>?;':"|[{}=+_)()*&^%$#@!~E-Z`]/g,
		15: /[,./<>?;':"|[{}=+_)()*&^%$#@!~F-Z`]/g,
		16: /[,./<>?;':"|[{}=+_)()*&^%$#@!~G-Z`]/g,
		17: /[,./<>?;':"|[{}=+_)()*&^%$#@!~H-Z`]/g,
		18: /[,./<>?;':"|[{}=+_)()*&^%$#@!~I-Z`]/g,
		19: /[,./<>?;':"|[{}=+_)()*&^%$#@!~J-Z`]/g,
		20: /[,./<>?;':"|[{}=+_)()*&^%$#@!~K-Z`]/g,
	};
	const normalizeString = (word) => {
		return word.toUpperCase().replace(hashvalues[baseIndex], '');
	};

	const handlerInput = (e) => {
		const str = e.target.value;
		setState(normalizeString(str));
		if (baseIndex !== null) {
			document.getElementById('enter').disabled = false;
		}
	};
	useEffect(() => {
		document.getElementById('enter').disabled = true;
	}, []);

	return (
		<div>
			<input
				id={iden}
				type={type}
				value={state}
				onChange={handlerInput}
				placeholder={placeh}
				min="2"
				max="20"
				required
			/>
		</div>
	);
}

export default Inputs;
