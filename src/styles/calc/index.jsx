import styled from 'styled-components';

export const CalculatorStyled = styled.div`
	border-radius: 10px;
	background: ${({ color }) => color.secondary};
	margin: 0 5%;
	margin-top: 5vh;
	padding: 5vh 10%;
	/* padding-top: 5vh; */
	form {
		/* padding: 0 5%; */
		width: 100%;
		input {
			font-size: 25px;
			width: 90%;
			margin: 2vh 0;
			border: 1px solid #00000000;
			background: #00000000;
			color: ${({ color }) => color.text};
			outline: none;
			padding: 2.5vh 5%;
			border-bottom: 1px solid ${({ color }) => color.text};
			transition: all 0.3s;
			&:focus {
				border-radius: 15px;
				border: 1px solid ${({ color }) => color.text};
			}
		}

		/* Chrome, Safari, Edge, Opera */
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		input[type='number'] {
			-moz-appearance: textfield;
		}

		button {
			border-radius: 10px;
			margin: 3vh 0;
			width: 100%;
			cursor: pointer;
			border: none;
			padding: 3vh 5%;
			background: ${({ color }) => color.button};
			color: white;
		}
	}
	@media screen and (max-width: 750px) {
		font-size: 15px;
		form {
			input {
				font-size: 20px;
			}
		}
		h1 {
			margin: 4vh 0;
			font-size: 18px;
		}
	}
`;
