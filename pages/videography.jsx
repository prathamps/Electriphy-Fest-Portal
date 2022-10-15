import Image from "next/image"
import React from "react"
import videographyImg from "../public/assets/projects/videography.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const videography = (
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
					src={videographyImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">{"Videography"}</h2>
					<h3>Pixels over the vaccum</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Videography</p>
					<h2 className="text-white">Overview</h2>
					<p className="text-[#bbbbbb] ">
						For the dreamers of tomorrow to capture the present which the world
						limits you to percieve
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl lg:relative lg:right-16 lg:w-80 bg-white shadow-gray-700 rounded-xl py-4 text-black">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Rules</p>
						<div className="">
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								1. One Team per College
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								2. Three make a team.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								3. Video can be edited
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								4. Creativity is welcomed
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								5. Minimum requirements are for the video to be in 720p@30fps
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								6. Video must be submitted in MP4 format
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								7. Certain places are restricted around the campus venturing
								outside the campus or even beyond the gate is prohibited
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								8. Not compulsory for overall championship
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

export default videography
