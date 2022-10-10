import React from "react"
import Link from "next/link"
import Image from "next/image"
const registersuccess = () => {
	return (
		<>
			<div
				className="w-full h-screen overflow-hidden text-center flex justify-center items-center"
				style={{
					background: "linear-gradient(to right,  #000000,#020206,#090F1C)",
				}}
			>
				<div className=" w-4/5  lg:w-3/12 h-2/4 bg-[#bbbbbb] rounded-xl">
					<div className="h-full flex flex-col justify-around items-center">
						<h2>Registeration Successful</h2>
						<Image
							width={150}
							height={150}
							src={"https://cdn-icons-png.flaticon.com/512/3699/3699516.png"}
							alt="Check Mark"
						/>
						<p className="text-bg-[#f8f7ce] ">
							Your college has successfully registered
						</p>
						<li className="text-sm uppercase hover:border-b bg-white text-black font-bold rounded-xl w-36 h-8 p-2 flex place-content-center">
							<Link href="/">Return home</Link>
						</li>
					</div>
				</div>
			</div>
		</>
	)
}
export default registersuccess
