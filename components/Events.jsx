import Image from "next/image"
import Link from "next/link"
import React from "react"
import videographyImg from "../public/assets/projects/videography.png"
import mockpressImg from "../public/assets/projects/mockpress.png"
import tresurehuntImg from "../public/assets/projects/treasurehunt.png"
import paperpresentationImg from "../public/assets/projects/paperpresentation.png"
import circuitdesignerImg from "../public/assets/projects/circuitdesigner.png"
import quizImg from "../public/assets/projects/quiz.png"
import EventItem from "./EventItem"

const Events = () => {
	return (
		<div id="events" className="w-full">
			<div className="max-w-[1240px] mx-auto py-16 flex flex-col justify-center place-items-center">
				<div>
					<p className="uppercase text-3xl font-medium tracking-widest text-[#f3bd7b] relative right-[-2rem]">
						Events
					</p>
					<h3 className="py-4 text-[#bbbbbb]">The fun and exciting events</h3>
				</div>
				<div>
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
							projectUrl="/videography"
							tech="Knife to meet you"
						/>
						<EventItem
							title="Treasure Hunt"
							backgroundImg={tresurehuntImg}
							projectUrl="/videography"
							tech="Into the voide"
						/>
						<EventItem
							title="Paper Presentation"
							backgroundImg={paperpresentationImg}
							projectUrl="/videography"
							tech="Aura"
						/>
						<EventItem
							title="Circuit Designer"
							backgroundImg={circuitdesignerImg}
							projectUrl="/videography"
							tech="Execuit"
						/>
						<EventItem
							title="Quiz"
							backgroundImg={quizImg}
							projectUrl="/videography"
							tech="Zap"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Events
