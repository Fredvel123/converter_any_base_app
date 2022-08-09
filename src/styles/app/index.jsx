import styled from 'styled-components';

export const AppStyled = styled.div`
	background: ${({ color }) => color.primary};
	color: ${({ color }) => color.text};
	min-height: 100vh;
`;
