import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Start />
		},
		{
			path: "/quiz",
			element: <Quiz />
		}
	])

	return (
		<RouterProvider router={router} />
	);
}

export default App;
