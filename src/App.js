import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='signin' element={<SignIn />} />
				<Route path='home' element={<Home />}>
					<Route path="seriale i programy" element/>
					<Route path="filmy" element/>
					<Route path="nowe i popularne" element/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
