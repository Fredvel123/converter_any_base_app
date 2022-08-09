import styled from 'styled-components';

export const HeaderStyled = styled.div`
	width: 90%;
	height: 17vh;
	padding: 0 5%;
	background: ${({ color }) => color.secondary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	.header {
		display: flex;
		align-items: center;
		h2 {
			margin-left: 3%;
		}
	}
	@media screen and (max-width: 850px) {
		height: 12vh;
		.header {
			h2 {
				font-size: 20px;
			}
			img {
				width: 35px;
			}
		}
	}
`;
