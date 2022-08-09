import { useSelector } from 'react-redux';
import github from '../../assets/github.png';
import { FooterStyled } from '../../styles/footer';
import { darkTheme, lightTheme } from '../../styles/tools';

function Footer() {
	const theme = useSelector((state) => state.theme.value);
	return (
		<FooterStyled color={theme ? lightTheme : darkTheme}>
			<h2>App developed by </h2>
			<a href="https://github.com/fredvel123/" target="__blank">
				<img src={github} alt="" />
				<h2>Freddy Velarde</h2>
			</a>
		</FooterStyled>
	);
}

export default Footer;
