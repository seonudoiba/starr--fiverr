import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Seller from "./components/Seller/Seller";
import Home from "./pages/Home";
import SellerPage from './pages/SellerPage'
const App = () => {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/seller" element={<Seller />} /> */}
				{/* <Route path="/service/:title" element={<SellerPage />} /> */}
			</Routes>
		</div>
	);
};

export default App;
