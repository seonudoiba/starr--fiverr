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
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

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

	const dispatch = useDispatch();
	let favs;
	useEffect(() => {
		// storing input name
		localStorage.setItem("name", JSON.stringify(name));
	  }, [name]);

	const handleFav = () => {
		setshowFav(!showFav);
		!showFav ? dispatch(increment()) : dispatch(decrement());
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
