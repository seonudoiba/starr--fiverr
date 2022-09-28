import {
	Typography,
	MenuItem,
	Button,
	CardActions,
	TextField,
	Box,
	FormControl,
} from "@material-ui/core";
import * as React from "react";
import FileBase from "react-file-base64";
import Services from "../../pages/Services"
import { useDispatch } from "react-redux";
import {createServices} from '../../actions/Services'
export default function Seller() {
	const [Category, setCategory] = React.useState("");
	const [SubCategory, setSubCategory] = React.useState("");
	const [Title, setTitle] = React.useState("I will");
	const [Tag, setTag] = React.useState("");
	const [Description, setDescription] = React.useState("");
	const [Price, setPrice] = React.useState(0);
	const [Image, setImage] = React.useState("");
	let ServiceData= [Title, Category, SubCategory,Tag, Description, Price, Image]
console.log(ServiceData)
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setCategory(event.target.value); 
	};
	const handleChangeSub = (event) => {
		setSubCategory(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch (createServices(ServiceData));
	};
	const handlePrice = (event) => {
		setPrice(event.target.value);
	};
	const handleDescription = (event) => {
		setDescription(event.target.value);
	};
	const handleTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleTags = (event) => {
		setTag(event.target.value);
	};
	let handleTagsEnter = (event) => {
		let len = event.target.value.length;
		if ((event.key === " ") | (event.key === "Enter")) {
			setTag(event.target.value.replace(/\s+/g, ","));
		}
	};
	return (
		<div className="shadow-xl hover:cursor-pointer w-3/5 mx-auto p-8 my-16">
			<Services/>
			<form onSubmit={handleSubmit} novValidate autoComplete='off'>
				<div className="w-8/12 ">
					<TextField
						fullWidth
						type="text"
						value={Title}
						onChange={handleTitle}
						variant="outlined"
					/>
					<div className=" my-4 flex">
						<div className="px-2 w-1/2">
							<TextField
								className="w-full"
								label="Category"
								select
								variant="outlined"
								value={Category}
								onChange={handleChange}>
								<MenuItem value="Writing">Ten</MenuItem>
								<MenuItem value="Graphics">Twenty</MenuItem>
								<MenuItem value="Programming">Thirty</MenuItem>
							</TextField>
						</div>

						<div className="px-2 w-1/2">
							<TextField
								className="w-full"
								label="SubCategory"
								select
								variant="outlined"
								value={SubCategory}
								onChange={handleChangeSub}>
								<MenuItem value="Writing">Ten</MenuItem>
								<MenuItem value="Graphics">Twenty</MenuItem>
								<MenuItem value="Programming">Thirty</MenuItem>
							</TextField>
						</div>
					</div>
					<br />
					<TextField
						className="w-full"
						type="text"
						label="Tags"
						variant="outlined"
						onChange={handleTags}
						onKeyDown={handleTagsEnter}
						value={Tag}
					/>
					<div className=" my-4">
						<TextField
							fullWidth
							type="text"
							label="Description"
							value={Description}
							onChange={handleDescription}
							variant="outlined"
							multiline
							placeholder="Write Your description here
            
            "
						/>
					</div>
					<div className=" my-4">
						<TextField
							fullWidth
							type="number"
							label="Price"
							value={Price}
							onChange={handlePrice}
							variant="outlined"
						/>
					</div>
					<div className=" my-4">
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) => setImage(base64)}
						/>
					</div>

					<Button variant="contained" type="submit" color="primary">
						save
					</Button>
				</div>
			</form>
		</div>
	);
}
