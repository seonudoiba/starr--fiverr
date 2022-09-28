import React from "react";
import Menu from "./Menu/Menu";
import ShowServices from "./services/ShowServices"

const Home = () => {
	return (
		<div className="App">
			<Menu />
			<ShowServices/>
		</div>
	);
};

export default Home;
