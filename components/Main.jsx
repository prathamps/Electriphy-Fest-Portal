import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET&#39;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						<span className="text-[#5651e5]"> Electriphy</span>
					</h1>
					<h1 className="py-2 text-gray-700 text-2xl">
						An Electronics and Physics fest
					</h1>

					<Link href="/register">
						<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
							Register Now
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Main
