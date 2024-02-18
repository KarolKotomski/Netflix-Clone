import "./dist/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
import BrowseHome from "./components/BrowseHome";
import BrowseTvShows from "./components/BrowseTvShows";
import BrowseMovies from "./components/BrowseMovies";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const Landing = lazy(() => import("./pages/Landing"));
	const SignIn = lazy(() => import("./pages/SignIn"));
	const Browse = lazy(() => import("./pages/Browse"));
	const NoMatch = lazy(() => import("./pages/NoMatch"));

	return (
		<QueryClientProvider client={client}>
			<SearchContextProvider>
				<BrowserRouter>
					<Suspense fallback={<div>Loading...</div>}>
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
			</SearchContextProvider>
		</QueryClientProvider>
	);
}

export default App;
