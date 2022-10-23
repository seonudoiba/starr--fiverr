import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
const SellerPage = () => {
	let { title } = useParams();
	let services = useSelector((state) => state.Services);

	let Servicesdata = services.data;
	const service = Servicesdata?.filter(checkTitle);

	function checkTitle(serviceData) {
		return serviceData.Title.replace(/ /g, "-") === title;
	}
	let Sliceservice = service?.slice();

	return (
		<div>
			SellerPage
			{Sliceservice && (
				<div className="w-4/5 mx-auto bg-gray-100 h-auto p-12">
					<div>
						<h2 className="text-4xl  text-left w-10/12">{Sliceservice[0].Title} for ${Sliceservice[0].Price}</h2>
					</div>
					<div className="flex justify-evenly w-2/5 py-4">
						<div className="pt-2 ">
							<Avatar
								alt="Remy Sharp"
								sx={{ bgcolor: "primary.main", width: 30, height: 30 }}>
								A
							</Avatar>
						</div>
						<div className="flex items-center text-start text-2xl">Abiodun</div>

						<div className=" pl-6 flex items-center">
							<Rating name="read-only" value={5} readOnly />
						</div>
						<div className="p-2  text-xl">(21 Reviews)</div>
					</div>
					<div className="p-1 my-12 border-2">
						<img alt= {Sliceservice[0].Title} className='gig-img' src={`${Sliceservice[0].Image}`} />
					</div>
					<div className="p-4 my-12 ">
						<h2 className=" text-4xl text-left ">About This Gig</h2>
					</div>
					<div className="p-4 my-12 ">
						<p className=" text-xl text-left ">{Sliceservice[0].Description}</p>
					</div>
					<div className="p-4 my-12  ">
						<p className=" text-4xl flex items-center text-left ">Tags: #{Sliceservice[0].Tag}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default SellerPage;
