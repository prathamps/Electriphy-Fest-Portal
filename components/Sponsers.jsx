import Image from "next/image"
import React from "react"
import Maftlaal from "../public/assets/skills/Mafatlal.webp"
import Tata from "../public/assets/skills/tata.png"
import Wipro from "../public/assets/skills/wipro.png"
import Infosys from "../public/assets/skills/infosys.png"
import Google from "../public/assets/skills/google.png"
import Zomato from "../public/assets/skills/zomato.png"
import Niveus from "../public/assets/skills/niveus.png"
import Swiggy from "../public/assets/skills/swiggy.png"

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
					Our Sponsers
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center ">
							<div className="m-auto">
								<Image src={Maftlaal} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Maftlaal</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Tata} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Tata</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Wipro} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Wipro</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Infosys} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Infosys</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Google} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Google</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Niveus} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Niveus</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Zomato} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-white">Zomato</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#131216]">
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
	)
}

export default Sponsers
