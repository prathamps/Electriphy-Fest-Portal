import React from "react"
import Image from "next/image"
import Link from "next/link"
import AboutImg from "../public/assets/about.jpg"

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About fest
					</p>
					<p className="py-2 text-gray-600">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
						aperiam fuga! Eius consequuntur neque laboriosam minus cum debitis
						nemo, ad voluptas, molestiae iste officia inventore! Tenetur
						suscipit nobis magni deserunt! Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Facilis dolore facere harum iusto eum
						iste aliquid consequuntur numquam natus. Dolorem enim rerum dicta
						pariatur delectus deserunt inventore corporis fugit quo.
					</p>
					<p className="py-2 text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
						a facere maxime cum blanditiis voluptate qui ab culpa, dolores et
						dolorem nemo. Culpa quia iste voluptatum quo minus numquam!
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	)
}

export default About
