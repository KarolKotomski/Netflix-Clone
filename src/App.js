import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import BrowseHome from "./components/BrowseHome";
import BrowseTvShows from "./components/BrowseTvShows";
import BrowseMovies from "./components/BrowseMovies";
import Fallback from "./components/Fallback";

function App() {
	const Landing = lazy(() => import("./pages/Landing"));
	const SignIn = lazy(() => import("./pages/SignIn"));
	const Browse = lazy(() => import("./pages/Browse"));
	const NoMatch = lazy(() => import("./pages/NoMatch"));

	return (
		<BrowserRouter>
			<Suspense fallback={<Fallback />}>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='signin' element={<SignIn />} />
					<Route path='browse' element={<Browse />}>
						<Route index element={<BrowseHome />} />
						<Route path='home' element={<BrowseHome />} />
						<Route path='tvshows' element={<BrowseTvShows />} />
						<Route path='movies' element={<BrowseMovies />} />
					</Route>
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
