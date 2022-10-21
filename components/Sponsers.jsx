import Image from "next/image"
import React from "react"
import PlaceholderImg from "../public/assets/skills/placeholder.png"
import genralrefrigerationImg from "../public/assets/skills/genralrefrigeration.png"

const Sponsers = () => {
	return (
		<div
			id="sponsers"
			className="w-full lg:h-screen py-36"
			style={{
				background:
					"linear-gradient(to right, rgb(16 16 16), rgb(34 34 50), rgb(3 5 12))",
			}}
		>
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="uppercase text-3xl mb-12 font-medium tracking-widest text-[#f3bd7b]">
					Our Sponsors
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="p-6 shadow-xl rounded-xl   lg:w-96 hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center ">
							<div className="m-auto">
								<Image
									src={genralrefrigerationImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">
									General Refrigeration & Engineering Works
								</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl  w-full lg:w-96 hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={PlaceholderImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl w-full lg:w-96 hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={PlaceholderImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl  w-full lg:w-96  hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={PlaceholderImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl w-full  lg:w-96  hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={PlaceholderImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl  w-full lg:w-96  hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={PlaceholderImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sponsers
