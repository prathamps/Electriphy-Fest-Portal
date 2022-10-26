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
					<div className="flex justify-center p-6 shadow-xl rounded-xl  w-full lg:w-96 hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="flex justify-center items-center">
							<div className="m-auto place-items-center">
								<Image
									src={"https://www.ashcomputers.in/img/logo.png"}
									width="351px"
									height="51px"
									alt="/"
								/>
							</div>
							{/* <div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Coming Soon</h3>
							</div> */}
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl w-full lg:w-96 hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={
										"data:image/png;base64,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"
									}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Union Bank</h3>
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
