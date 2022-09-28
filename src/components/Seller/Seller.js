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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createServices } from "../../actions/Services";
export default function Seller() {
	let [ServiceData, setServiceData] = useState({
		Title: "I will",
		Description: "",
		Category: "",
		Tag: "",
		SubCategory: "",
		Price: 0,
		Image: "",
	});
	console.log(ServiceData);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createServices(ServiceData));
	};

	return (
		<div className="shadow-xl hover:cursor-pointer w-3/5 mx-auto p-8 my-16">
			<form onSubmit={handleSubmit} novValidate autoComplete="off">
				<div className="w-8/12 ">
					<TextField
						fullWidth
						type="text"
						value={ServiceData.Title}
						onChange={(e) => setServiceData({ ...ServiceData, Title: e.target.value })}
						variant="outlined"
					/>
					<div className=" my-4 flex">
						<div className="px-2 w-1/2">
							<TextField
								className="w-full"
								label="Category"
								select
								variant="outlined"
								value={ServiceData.Category}
								onChange={(e) =>
									setServiceData({ ...ServiceData, Category: e.target.value })
								}>
								<MenuItem value="6326224621fe689db14745ac">Graphics & Design</MenuItem>
								<MenuItem value="6326236b21fe689db14745be">Digital Marketing</MenuItem>
								<MenuItem value="6333793894bebd0e0fbd6288">Writing & Translation</MenuItem>
								<MenuItem value="6333797194bebd0e0fbd6289">Programming & Tec</MenuItem>
							</TextField>
						</div>

						<div className="px-2 w-1/2">
							<TextField
								className="w-full"
								label="SubCategory"
								select
								variant="outlined"
								value={ServiceData.SubCategory}
								onChange={(e) =>
									setServiceData({ ...ServiceData, SubCategory: e.target.value })
								}>
								<MenuItem value="6326225d21fe689db14745ae">Social Media Marketing</MenuItem>
								<MenuItem value="6326239c21fe689db14745c2">Logo & Brand Identity</MenuItem>
								<MenuItem value="633379ca94bebd0e0fbd628a">Articles & Blog Posts</MenuItem>
							</TextField>
						</div>
					</div>
					<br />
					<TextField
						className="w-full"
						type="text"
						label="Tags"
						variant="outlined"
						value={ServiceData.Tag}
						onChange={(e) => setServiceData({ ...ServiceData, Tag: e.target.value })}
					/>
					<div className=" my-4">
						<TextField
							fullWidth
							type="text"
							label="Description"
							value={ServiceData.Description}
							onChange={(e) =>
								setServiceData({ ...ServiceData, Description: e.target.value })
							}
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
							value={ServiceData.Price}
							onChange={(e) => setServiceData({ ...ServiceData, Price: e.target.value })}
							variant="outlined"
						/>
					</div>
					<div className=" my-4">
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) => setServiceData({ ...ServiceData, Image: base64 })}
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
