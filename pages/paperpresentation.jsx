import Image from "next/image"
import React from "react"
import paperpresentationImg from "../public/assets/projects/paperpresentation.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const paperpresentation = (
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
					src={paperpresentationImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">{"Paper Presentation"}</h2>
					<h3>Aura</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Paper Presentation</p>
					<h2 className="text-white">Overview</h2>
					<p className="text-[#bbbbbb] ">
						Put forth thy ideas for better or worse, but for the glory of
						science
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl lg:relative lg:right-16 lg:w-80 bg-white shadow-gray-700 rounded-xl py-4 text-black">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Rules</p>
						<div className="">
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								1. A team can consist of maximum 2 participants.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								2. Each team will get 5 + 1 minutes to present their paper and
								two minutes will be devoted to question from the judges
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								3. The participants will have to present their papers in
								MsPowerPoint format only. Blantant plagiarism from the internet
								is not encourages and will not be entertained.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								4. The decision of the judges and event heads are considered
								definitive and binding for all and cannot be challeneged.
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								5. Topics are resitricted to PU physics text book
							</p>
							<p className="text-gray-600 py-2 pl-4 flex items-center">
								6. Failure to comply with any of the rules may result in the
								paper being rejected.
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

export default paperpresentation
