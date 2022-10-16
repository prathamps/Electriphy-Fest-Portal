import Image from "next/image"
import React from "react"
import mockpressImg from "../public/assets/projects/mockpress.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const mockpress = (
	rule1,
	rule2,
	rule3,
	rule4,
	rule5,
	rule6,
	rule7,
	rule8,
	rule9
) => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={mockpressImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">{"Mock Press"}</h2>
					<h3>Knife to meet you</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Mock Press</p>
					<h2 className="text-white">Overview</h2>
					<p className="text-[#bbbbbb] ">
						Why{`'`}d you do it? It wasn{`'`}t me! For the Fame? Money give you
						crazy happiness!! Go on, Be Creative
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl lg:relative lg:right-16 lg:w-80 bg-white shadow-gray-700 rounded-xl py-4 text-black">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Rules</p>
						<div className="">
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								1. One Person from every college.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								2. Prelims in the forenoon, finals before the valecdictory
								ceremony
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								3. No usage of profane words
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								4. There will be cross questions by the judges and the audience
								and the evaluation is based on performances
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								5. Participants will be informed of their characters a day prior
								to the event
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								6. Accessories will be provided to act out stuff
							</p>
						</div>
					</div>
				</div>
				<Link href="/#sponsers">
					<p className="underline cursor-pointer text-[#bbbbbb]">Back</p>
				</Link>
			</div>
		</div>
	)
}

export default mockpress
