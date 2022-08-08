import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './redux/slices/theme';

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
		<div className="App">
			<h2>hello world</h2>
		</div>
	);
}

export default App;
