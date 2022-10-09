import Image from "next/image"
import React, { useEffect, useState } from "react"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"
import videographyImg from "../public/assets/projects/videography.jpg"
import { Registration } from "../components/Registration"

const register = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={videographyImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Registeration</h2>
					<h3>To be a part of this exciting event register now</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 py-8">
				<div className="col-span-4">
					<h2>Register</h2>
				</div>
				<Registration />

				<Link href="/">
					<p className="underline cursor-pointer pt-96">Back</p>
				</Link>
			</div>
		</div>
	)
}

export default register
