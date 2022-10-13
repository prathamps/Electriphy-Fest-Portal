import Link from "next/link"
import React from "react"
import Image from "next/image"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import styles from "./Main.module.css"
import FloatingImg from "../public/assets/floating_image2.png"
import FloatingImg3 from "../public/assets/floating_image3.png"
import FloatingImg1 from "../public/assets/floating_image1.png"

const Footer = () => {
	return (
		<div
			id="home"
			className="w-full h-96 text-center"
			style={{
				background: "linear-gradient(to right,  #000000,#020206,#090F1C)",
			}}
		>
			<div className="flex sm:flex-crow justify-between  items-start text-white">
				<div className="mt-16 mx-8 md:ml-48 lg:ml-72 lg:text-2xl w-46  flex flex-col items-start">
					<span className="text-[#a9a6f8]">Electriphy</span>
					<span className="text-justify mt-4 lg:text-lg w-36 lg:w-2/5  self-start">
						A event that brings the best of two worlds on that deals with the
						fundamental understanding of the know universe and the matter that
						makes up the universe.
					</span>
				</div>
				<div className="mt-16 ml-8 md:ml-36 lg:mr-56 lg:ml-0 lg:text-2xl w-96 lg:w-2/5 flex flex-col items-start">
					<span className="overflow-x-hidden whitespace-nowrap">
						Social Media
					</span>
					<span className="text-xs mt-4">Instagram</span>
					<a className="mt-4" href={"https://www.instagram.com"}>
						<Image
							width={25}
							height={25}
							alt={"Instagram"}
							src={
								"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
							}
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
