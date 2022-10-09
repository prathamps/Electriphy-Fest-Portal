import Image from "next/image"
import React, { useEffect, useState } from "react"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"
import registerbackgroundImg from "../public/assets/projects/registerbackground.png"
import { Registration } from "../components/Registration"
import Maftlaal from "../public/assets/skills/Mafatlal.webp"
import Tata from "../public/assets/skills/tata.png"
import Wipro from "../public/assets/skills/wipro.png"
import Infosys from "../public/assets/skills/infosys.png"
import Google from "../public/assets/skills/google.png"
import Zomato from "../public/assets/skills/zomato.png"
import Niveus from "../public/assets/skills/niveus.png"
import Swiggy from "../public/assets/skills/swiggy.png"

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
				<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="p-6 shadow-xl rounded-xl ease-in duration-300">
							<div className="grid grid-cols-2 gap-4 justify-center items-center ">
								<div className="m-auto">
									<Image src={Maftlaal} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Maftlaal</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Tata} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Tata</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Wipro} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Wipro</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Infosys} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Infosys</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Google} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Google</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Niveus} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Niveus</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300 ">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Zomato} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Zomato</h3>
								</div>
							</div>
						</div>
						<div className="p-6 shadow-xl rounded-xl  ease-in duration-300">
							<div className="grid grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image src={Swiggy} width="64px" height="64px" alt="/" />
								</div>
								<div className="flex flex-col items-center justify-center">
									<h3 className="text-white">Swiggy</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 py-8">
				<Registration />

				<Link href="/">
					<p className="underline cursor-pointer pt-96">Back</p>
				</Link>
			</div>
		</div>
	)
}

export default register
