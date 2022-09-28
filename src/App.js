import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Seller from "./components/Seller/Seller";
import Home from "./components/Home";
import { getServices } from "./actions/Services";
import SellerPage from './pages/SellerPage'
const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getServices());
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/seller" element={<Seller />} />
				<Route path="/service/:title" element={<SellerPage />} />
			</Routes>
		</div>
	);
};

export default App;
