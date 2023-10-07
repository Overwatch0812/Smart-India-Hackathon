import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import Shimmer from "./Shimmer";
export default function MyProjects() {
	const [cardData, setCardData] = useState([]);
	async function getCardData() {
		const res = await fetch(
			"https://manage-kxtdoqvh3-overwatch0812.vercel.app/api/"
		);
		const data = await res.json();
		setCardData(data);
	}
	useEffect(() => {
		getCardData();
	}, []);

	return (
		<>
			{cardData.length === 0 ? (
				<div className="px-8 mx-3 lg:mx-auto my-4 text-white w-full flex flex-col gap-8">
					<Shimmer />
				</div>
			) : (
				<div
					className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-6 lg:gap-7 xl:gap-8
        "
				>
					{cardData.map((project) => {
						return (
							<Link
								to={"/project/" + project.id}
								key={project.id}
							>
								<FeedCard {...project} />
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
}
