import icon from '../../assets/main-icon.png';
// redux
import { useSelector } from 'react-redux';
// theme
import { darkTheme, lightTheme } from '../../styles/tools';
import { HeaderStyled } from '../../styles/header';
// components
import ThemeButton from '../__ThemeButton';

function Header() {
	const theme = useSelector((state) => state.theme.value);

	return (
		<HeaderStyled color={theme ? lightTheme : darkTheme}>
			<div className="header">
				<img src={icon} width="55" alt="" />
				<h2>Converter Base App</h2>
			</div>
			<ThemeButton />
		</HeaderStyled>
	);
}

export default Header;
