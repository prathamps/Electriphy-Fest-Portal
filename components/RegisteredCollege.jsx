import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"

import { motion } from "framer-motion"

import { db } from "./firebase"
import { collection, query, getDocs, onSnapshot } from "firebase/firestore"

const RegisteredCollege = () => {
	const [collegenames, setCollegeNames] = useState([])
	const [isOpen, setIsOpen] = useState(true)

	const collegeData = async () => {
		onSnapshot(collection(db, "colleges"), (snapshot) => {
			setCollegeNames(snapshot.docs.map((doc) => doc.data()))
		})
		console.log("College Names", collegenames)
	}

	useEffect(() => {
		collegeData()
	}, [])

	return (
		<div className="text-white text-lg">
			<div className="text-xl">Registered Colleges</div>
			{collegenames &&
				collegenames.map((college, id) => (
					<>
						<motion.h2 className="text-white pt-8" key={id}>
							{college.college_name}
						</motion.h2>
						<p className="text-[#bbbbbb] pb-8" key={college.id}>
							{"("}
							{college.college_contact}
							{")"}
						</p>
						<div className="flex justify-center items-center">
							<motion.div
								layout="position"
								className="grid md:grid-cols-2 gap-4 w-full py-2"
							>
								{college.eventParticipants &&
									Object.entries(college.eventParticipants).map(
										([ekey, evalue], eId) => (
											<motion.div
												layout
												key={eId}
												transition={{ layout: { duration: 1, type: "spring" } }}
												className="card bg-slate-500 px-8 py-8 grid place-content-center rounded-2xl"
												onClick={(e) => {
													setIsOpen(!isOpen)
												}}
											>
												<motion.h2 layout="position" className="text-[#f0f0f0]">
													{ekey
														.replace(/([-_][a-z])/gi, ($1) => {
															return $1
																.toUpperCase()
																.replace("-", " ")
																.replace("_", " ")
														})
														.toUpperCase()}
												</motion.h2>
												{Object.entries(evalue).map(([pkey, pvalue], evId) => (
													<>
														{isOpen && (
															<div>
																<p className="text-[#ffffff] py-8" key={evId}>
																	{pkey.charAt(0).toUpperCase() + pkey.slice(1)}
																</p>
																{Object.entries(pvalue).map(
																	([skey, svalue], evvId) => (
																		<>
																			{svalue.length !== 0 && (
																				<div key={evvId}>
																					<motion.div
																						initial={{ opacity: 0 }}
																						animate={{ opacity: 1 }}
																						transition={{ duration: 1 }}
																						className="max-w-[1240px]"
																					>
																						<motion.div
																							layout="position"
																							className="w-full py-2"
																						>
																							{skey}: {svalue}
																						</motion.div>
																					</motion.div>
																				</div>
																			)}
																		</>
																	)
																)}
															</div>
														)}
													</>
												))}
											</motion.div>
										)
									)}
							</motion.div>
						</div>
					</>
				))}
		</div>
	)
}

export default RegisteredCollege
