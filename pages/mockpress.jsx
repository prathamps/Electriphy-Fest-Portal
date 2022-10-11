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
					<h2 className="py-2">{title}</h2>
					<h3>Knife to meet you</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Mock press</p>
					<h2 className="text-white">Overview</h2>
					<p className="text-[#bbbbbb]">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
						deleniti doloribus nisi officia suscipit amet necessitatibus
						repudiandae ad ab iste, aut, odio facilis accusamus culpa nostrum et
						omnis officiis laboriosam! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Perferendis dolorem veritatis deleniti qui neque.
						Pariatur tempora necessitatibus, quis quos exercitationem fuga velit
						quia possimus voluptas unde ratione tenetur quisquam, voluptate quas
						amet natus aut illum perspiciatis dolor itaque sint? Doloribus
						laboriosam quia fugit deserunt rem animi in eveniet aperiam!
						Quaerat.
					</p>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl bg-white shadow-gray-700 rounded-xl py-4 text-black">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Rules</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> {rule1}
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> {rule2}
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> {rule3}
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								{rule4}
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> {rule5}
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> {rule6}
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	)
}

export default mockpress
