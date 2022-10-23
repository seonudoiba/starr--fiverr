import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { increment, decrement } from "../../features/AddFav";
import { useDispatch } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
	useAddFavouritesMutation,
	useDeleteFavouriteMutation,
	useGetFavouritesQuery,
} from "../../features/api/apiSlice";
const theme = createTheme({
	palette: {
		secondary: {
			light: "#ffffff",
			main: "#ffffff",
			dark: "#ffffff",
		},
	},
});

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function CardItem({ Service }) {
	const [showFav, setshowFav] = useState(false);
	const [press, setpress] = useState("Not Pressed");
	// let [Data, setData] = useState({
	// 	name: "I will dance",

	// });
	let favs;
	const {
		data: favourites,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetFavouritesQuery();
	let deleteId;
	if (isLoading) {
		console.log(isLoading);
	} else if (isSuccess) {
		favs = favourites.data;
		deleteId = favs.filter((fav) => {
			return fav.fav == "633e253f8cce730edeb08590";
		});
	} else if (isError) {
		console.log(isError, error);
	}

	const dispatch = useDispatch();
	const [addFavourites] = useAddFavouritesMutation();
	const [deleteFavourite] = useDeleteFavouriteMutation();
	let cont;
	const handleFav = () => {
		!showFav ? dispatch(increment()) : dispatch(decrement());
		press === "Pressed" && deleteId.map((del) => deleteFavourite({ id: del._id }));
		setpress("Not Pressed");
		press === "Not Pressed" && addFavourites({ fav: Service._id });
		setpress("Pressed");
		!showFav && deleteId.map((del) => (cont = <div> Helllo {del._id}</div>));

		setshowFav(!showFav);
		// alert(deleteId[0]._id)
		// deleteFavourite({ id: deleteId[0]._id })
		// deleteFavourite({ id: deleteId[0]._id });
	};

	return (
		<Card className="border cursor-pointer" sx={{ maxWidth: 400 }}>
			<div className="">
				<CardMedia
					className="border style-img"
					component="img"
					height="200"
					image={`${Service.Image}`}
					alt="Paella dish"
				/>
			</div>
			{/* {deleteId[0].fav}"hi" */}
			<div>
				<div className="flex">
					<div className="pt-2 pl-1">
						<Avatar
							alt="Remy Sharp"
							sx={{ bgcolor: "primary.main", width: 19, height: 19 }}>
							B
						</Avatar>
					</div>
					<div className="p-2 text-start text-sm">Abiodun</div>
				</div>
				<div className="flex">
					<Link to={`/service/${Service.Title.replace(/ /g, "-")}`}>
						<div className="px-2 text-start show-2 ">{Service.Title}</div>
					</Link>
				</div>
				<div className="flex justify-even items-center">
					<div className=" pl-1">
						<Rating name="read-only" value={5} readOnly />
					</div>
					<div className="p-2 text-end text-sm">(21 Reviews)</div>
				</div>
				<div className="flex border-y-2 px-2 justify-between items-center">
					<div className="">
						<IconButton
							onClick={handleFav}
							aria-label="favourite"
							sx={{ color: `${showFav ? "error.main" : "text.disabled"}` }}>
							<FavoriteIcon />
						</IconButton>
					</div>
					<div className=" pr-2 ">
						<span className=" text-end pr-1 text-xs">STARTING AT </span>
						{`$${Service.Price}`}
					</div>
				</div>
			</div>
		</Card>
	);
}
