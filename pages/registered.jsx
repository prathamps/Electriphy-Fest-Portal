import React from "react"
import Link from "next/link"
import Image from "next/image"
import RegisteredCollege from "../components/RegisteredCollege"
const registered = () => {
	return (
		<>
			<div
				className="w-full h-screen text-center flex justify-center items-center"
				style={{
					background: "linear-gradient(to right,  #000000,#020206,#090F1C)",
				}}
			>
				<div className="h-4/5">
					<RegisteredCollege />
				</div>
			</div>
		</>
	)
}
export default registered
