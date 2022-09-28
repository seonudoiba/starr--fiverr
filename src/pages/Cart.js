import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../Seller/Card";
const Cart = () => {
	let services = useSelector((state) => state.Services);
    let Services = services.data
    console.log(Services)
	return (
		<div>
			<div className="grid sm:grid-cols-2 md:grid-cols-5 p-4 m-8 shadow-lg gap-6">
				 
{
    Services?.map(Service => <CardItem key={Service.id} Service={Service} />)
}
			</div>
		</div>
	);
};

export default Cart;
