import {
	useGetServicesQuery,
	useGetFavouritesQuery,
	// useUpdateServiceMutation,
	// useDeleteServiceMutation,
	// useAddServiceMutation
} from "../../features/api/apiSlice";
import { useState } from "react";
import CardItem from "../Seller/Card";
import { CircularProgress } from "@mui/material";
const ShowServices = () => {
	// const [newService, setNewService] = useState('')

	const { data: services, isLoading, isSuccess, isError, error } = useGetServicesQuery();

	

	let content;
	if (isLoading) {
		console.log(isLoading);
		content = <CircularProgress />;
	} else if (isSuccess) {
		content = (
			<div className="grid sm:grid-cols-2 md:grid-cols-5 p-4 mx-8 shadow-lg gap-6">
				{services.data.map((service) => {
					console.log(service._id);
					return <CardItem key={service._id} Service={service} />;
				})}
			</div>
		);
	} else if (isError) {
		console.log(isError, error);
		content = <p>{error.error}</p>;
	}

	return (
		<main>
			<h1 className="text-start text-2xl pl-12">Check out the Trending Gigs </h1>
			{content}
		</main>
	);
};
export default ShowServices;
