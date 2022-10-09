import Image from "next/image"
import React from "react"
import Maftlaal from "../public/assets/skills/Mafatlal.webp"
import Tata from "../public/assets/skills/tata.png"
import Wipro from "../public/assets/skills/wipro.png"
import Infosys from "../public/assets/skills/infosys.png"
import Google from "../public/assets/skills/google.webp"
import Zomato from "../public/assets/skills/zomato.png"
import Niveus from "../public/assets/skills/niveus.png"
import Swiggy from "../public/assets/skills/swiggy.png"

const Sponsers = () => {
	return (
		<div id="sponsers" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Our Sponsers
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Maftlaal} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Maftlaal</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Tata} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tata</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Wipro} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Wipro</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Infosys} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Infosys</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Google} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Google</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Niveus} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Niveus</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Zomato} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Zomato</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Swiggy} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Swiggy</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sponsers
