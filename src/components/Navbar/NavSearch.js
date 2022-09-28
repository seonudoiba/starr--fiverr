import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "90%",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: "100%",
	position: "absolute",
	right: "0",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "white",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(0)})`,
		transition: theme.transitions.create("width"),
		[theme.breakpoints.up("md")]: {
			width: "1",
		},
	},
}));
const NavSearch = () => {
	return (
		<div>
			<Search>
				<SearchIconWrapper className="rounded-r bg-gray-800">
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="What service are you looking for today?"
					inputProps={{ "aria-label": "search" }}
					className="md:w-11/12"
				/>
			</Search>
		</div>
	);
};

export default NavSearch;
