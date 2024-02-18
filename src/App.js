import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import BrowseHome from "./components/BrowseHome";
import BrowseTvShows from "./components/BrowseTvShows";
import BrowseMovies from "./components/BrowseMovies";
import NoMatch from "./components/NoMatch";
import { SearchContextProvider } from "./context/SearchContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={client}>
			<SearchContextProvider>
				<BrowserRouter>
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
				</BrowserRouter>
			</SearchContextProvider>
		</QueryClientProvider>
	);
}

export default App;
