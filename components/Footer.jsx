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
			<div className="flex sm:flex-crow justify-evenly  items-start text-white">
				<div className="m-16 text-2xl w-46  flex flex-col items-start">
					<span className="text-[#a9a6f8]">Electriphy</span>
					<p className="left-align mt-4 text-lg w-2/5 self-start text-left">
						A event that brings the best of two worlds on that deals with the
						fundamental understanding of the know universe and the matter that
						makes up the universe, The other half is trying to exploit the
						building blocks of the universe.
					</p>
				</div>
				<div className="mt-16 relative text-2xl">Social Media</div>
			</div>
		</div>
	)
}

export default Footer
