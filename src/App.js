import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import BrowseHome from "./components/BrowseHome";
import BrowseTvShows from "./components/BrowseTvShows";
import BrowseMovies from "./components/BrowseMovies";
import NoMatch from "./components/NoMatch";
import Search from "./components/Search";
import { MoviesContextProvider } from "./context/MoviesContext";

function App() {
	return (
		<MoviesContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='signin' element={<SignIn />} />
					<Route path='browse' element={<Browse />}>
						<Route index element={<BrowseHome />} />
						<Route path='home' element={<BrowseHome />} />
						<Route path='tvshows' element={<BrowseTvShows />} />
						<Route path='movies' element={<BrowseMovies />} />
						<Route path='search' element={<Search />}></Route>
					</Route>
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</MoviesContextProvider>
	);
}

export default App;
