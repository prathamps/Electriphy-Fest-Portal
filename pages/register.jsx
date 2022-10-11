import Image from "next/image"
import React, { useEffect, useState } from "react"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"
import registerbackgroundImg from "../public/assets/projects/registerbackground.png"
import { Registration } from "../components/Registration"
import PlaceholderImg from "../public/assets/skills/placeholder.png"

const register = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 flex place-content-center" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					style={{ filter: "blue(100px)" }}
					src={registerbackgroundImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex place-content-center flex-col">
					<h1 className="py-2">Registeration</h1>
					<h3>To be a part of this exciting event register now</h3>
				</div>
			</div>

			<div
				id="sponsers"
				className="w-full lg:h-1/5 py-8"
				style={{
					background: "#1E1E1E",
				}}
			>
				<div className="md:max-w-[1240px] mx-auto flex flex-col lg:flex-col overflow-clip  justify-center h-64 lg:h-full">
					<div className="grid grid-cols-4 gap-8 gap-x-60 md:gap-8 overflow-x-scroll overflow-y-hidden lg:overflow-hidden">
						<div className="p-6 shadow-xl rounded-xl ease-in duration-300 w-56 mx-14">
							<div className="grid grid-cols-2 gap-4 justify-center items-center ">
								<div className="m-auto">
									<Image
										src={PlaceholderImg}
										width="64px"
										height="64px"
										alt="/"
									/>
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300  w-56 mx-14">
							<div className="grid grid-cols-2 gap-4  justify-center items-center">
								<div className="m-auto">
									<Image
										src={PlaceholderImg}
										width="64px"
										height="64px"
										alt="/"
									/>
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300  w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl ease-in duration-300  w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300  w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300  w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300  w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300   w-56 mx-14">
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
									<h3 className="text-white">Placeholder</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 py-8">
				<Registration />
			</div>
		</div>
	)
}

export default register
