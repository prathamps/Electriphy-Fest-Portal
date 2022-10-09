import React from "react"
import Image from "next/image"
import Link from "next/link"
import AboutImg from "../public/assets/about.png"

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 m">
				<div className="col-span-2 md:w-3/4">
					<p className="uppercase text-3xl font-medium tracking-widest text-[#f3bd7b]">
						About fest
					</p>
					<p className="py-2 text-lg text-[#bbbbbb]">
						The Department of Physics and Electronics with Astro and Electronics
						club presents Electriphy. An exciting and fun fest with engaging
						students around mangalore. The fest consits of fun events that lets
						the participants from colleges around mangalore to compete amongst
						one another. All these events are conducted and planned by the
						student of Aloyisus college.{" "}
						<p className="py-2 text-lg  text-[#bbbbbb]">
							This event brings the best of two worlds on that deals with the
							fundamental understanding of the know universe and the matter that
							makes up the universe, The other half is trying to exploit the
							building blocks of the universe and unabling ourselves in its
							advance of finding more of the ever expanding knowledge set.
						</p>
					</p>
					<p className="py-2 text-lg  text-[#bbbbbb]">
						The aim of the fest is to foster research and innovation in the
						field of Physics and Electronics and act as a platform to discover
						their interest in the domain of both the fields.
					</p>
				</div>
				<div className="max-w-full h-auto m-auto shadow-xl  shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src={AboutImg}
						height={530}
						width={350}
						className="rounded-xl"
						alt="/"
					/>
				</div>
			</div>
		</div>
	)
}

export default About
