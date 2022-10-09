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

const Main = () => {
	return (
		<div
			id="home"
			className="w-full h-screen text-center"
			style={{
				background: "linear-gradient(to right,  #000000,#020206,#090F1C)",
			}}
		>
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-row justify-center md:justify-between items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-[#bbbbbb]">
						LET&#39;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						<div className={styles.sign}>
							<span>Electriphy</span>
						</div>
					</h1>
					<h1 className="py-2 text-white text-2xl">
						An Electronics and Physics fest
					</h1>

					<Link href="/register">
						<p className="text-center py-3 rounded-xl bg-white text-[#090909] font-bold text-lg cursor-pointer">
							Register Now
						</p>
					</Link>
				</div>
				<div className="md:pl-8">
					<div className="absolute bottom-80">
						<Image
							src={FloatingImg}
							className={styles.floating}
							width={500}
							height={500}
							alt="/"
						/>
					</div>
					<div className="relative bottom-[-12rem]">
						<Image
							style={{ position: "absolute", top: "-10rem", zIndex: 10 }}
							src={FloatingImg1}
							className={styles.floating}
							width={500}
							height={500}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
