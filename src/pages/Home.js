import React from "react";
import Menu from "../components/Menu/Menu";
import ShowServices from "../components/services/ShowServices"

const Home = () => {
	return (
		<div className="App">
			<Menu />
			<ShowServices/>
		</div>
	);
};

export default Home;
