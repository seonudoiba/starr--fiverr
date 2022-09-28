import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../Seller/Card";

const ShowServices = () => {
	let services = useSelector((state) => state.Services);
	let Services = services.data;
	return (
		<div>
			<div className="grid sm:grid-cols-2 md:grid-cols-5 p-4 m-8 shadow-lg gap-6">
				{Services?.map((Service) => {
					console.log(Service._id)
					return (
						
							<CardItem key={Service._id} Service={Service} />
						
					);
				})}
			</div>
		</div>
	);
};

export default ShowServices;
