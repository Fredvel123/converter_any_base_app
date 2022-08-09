import styled from 'styled-components';

export const FooterStyled = styled.footer`
	width: 100%;
	height: 10vh;
	margin-top: 5vh;
	background: ${({ color }) => color.secondary};
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		font-size: 25px;
	}
	a {
		margin-left: 1%;
		width: 25%;
		display: flex;
		align-items: center;
		color: ${({ color }) => color.text};
		/* background: green; */
	}
	img {
		width: 25px;
		height: 25px;
		margin-right: 2%;
	}
	@media screen and (max-width: 800px) {
		h2 {
			font-size: 15px;
		}
		a {
			width: 25%;
		}
		img {
			width: 20px;
			height: 20px;
		}
	}
`;
