import Image from "next/image"
import Link from "next/link"
import React from "react"
import videographyImg from "../public/assets/projects/videography.jpg"
import mockpressImg from "../public/assets/projects/mockpress.jpg"
import tresurehuntImg from "../public/assets/projects/treasurehunt.jpg"
import paperpresentationImg from "../public/assets/projects/paperpresentation.jpg"
import EventItem from "./EventItem"

const Events = () => {
	return (
		<div id="events" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Events
				</p>
				<h2 className="py-4">The fun and exciting events</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<EventItem
						title="Videography"
						backgroundImg={videographyImg}
						projectUrl="/videography"
						tech="Pixels over the vaccum"
					/>
					<EventItem
						title="Mock Press"
						backgroundImg={mockpressImg}
						projectUrl="/mockpress"
						tech="Knife to meet you"
					/>
					<EventItem
						title="Treasure Hunt"
						backgroundImg={tresurehuntImg}
						projectUrl="/treasurehunt"
						tech="Into the voide"
					/>
					<EventItem
						title="Paper Presentation"
						backgroundImg={paperpresentationImg}
						projectUrl="/paperpresentation"
						tech="Aura"
					/>
				</div>
			</div>
		</div>
	)
}

export default Events
