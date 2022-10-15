import Image from "next/image"
import React from "react"
import treasurehuntImg from "../public/assets/projects/treasurehunt.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const treasurehunt = (
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
					src={treasurehuntImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">{"Treasure Hunt"}</h2>
					<h3>Into the void</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Treasure Hunt</p>
					<h2 className="text-white">Overview</h2>
					<p className="text-[#bbbbbb] w-4/5">
						We are what happens when a primordial mixture of hydrogen and helium
						evolves for so long it begins to ask where i came from. So, we
						venture out into the void for answers.
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl lg:relative lg:right-16 lg:w-80 bg-white shadow-gray-700 rounded-xl py-4 text-black">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Rules</p>
						<div className="">
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								1. One Team from every college.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								2. A team can consist of maximum 4 participants.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								3. There will be boundaries set so you know where to look
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								4. Cheating, Sabotaging, Replacing items etc, will lead to
								instant disqualification.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								5. No mingling with the other teams, or taking pictures of the
								campus prior to the event
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								6. A team must stick together at all times
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								7. No asking for help with any of the people involved in the
								event, volunteers included
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

export default treasurehunt
