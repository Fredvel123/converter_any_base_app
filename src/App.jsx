import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './redux/slices/theme';
// theme
import { darkTheme, lightTheme } from './styles/tools';
// components
import Calculator from './components/Calculator';
import { AppStyled } from './styles/app';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const theme = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();
	useEffect(() => {
		const data = localStorage.getItem('theme');
		if (data !== null) {
			dispatch(setTheme(JSON.parse(data)));
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	return (
		<AppStyled color={theme ? lightTheme : darkTheme}>
			<Header />
			<Calculator />
			<Footer />
		</AppStyled>
	);
}

export default App;
