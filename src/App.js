import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='signin' element={<SignIn />} />
				<Route path='browse' element={<Browse />}>
					<Route path='home' element />
					<Route path='tvshows' element />
					<Route path='movies' element />
					<Route path='new&popular' element />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
