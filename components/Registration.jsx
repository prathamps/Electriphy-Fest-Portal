import React, { useState } from "react"
import { db } from "../pages/firebase"
import { collection, addDoc } from "firebase/firestore"

// Framer motion

import { motion } from "framer-motion"
import { EventRegisterCard } from "./EventRegisterCard"
import { useRouter } from "next/router"

export const Registration = () => {
	const [colname, setColName] = useState("")
	const [contactnum, setContactNum] = useState()
	const [eventParticipants, setEventParticipants] = useState({})

	const router = useRouter()
	const [loader, setLoader] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoader(true)
		// Add a new document with a generated id.
		console.log({
			college_name: colname,
			college_contact: contactnum,
			eventParticipants: eventParticipants,
		})
		try {
			const docRef = await addDoc(collection(db, "colleges"), {
				college_name: colname || null,
				college_contact: contactnum || null,
				eventParticipants: eventParticipants || null,
			})
				.then(() => {
					console.log("Document written with ID: ", docRef)
					router.push("/registersuccess")
					setLoader(false)
				})
				.catch((err) => {
					alert(err.message)
					setLoader(false)
					router.push("/registerfailed")
				})
		} catch {
			// router.push("/registerfailed")
			console.log("An Error was encountered")
		}

		// setColName("")
		// setContactNum("")
		// setEventParticipants("")
	}

	return (
		<div>
			<div id="contact" className="w-full lg:h-screen">
				<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
					<p className="text-xl tracking-widest uppercase text-[#5651e5]"></p>
					<motion.div layout>
						<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4">
							<div className="p-4">
								<form method="POST" onSubmit={handleSubmit}>
									<h2 className="py-4 text-white">College Details</h2>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<motion.div layout="position" className="flex flex-col">
											<label className="uppercase text-sm py-2 text-white">
												College Name
											</label>
											<input
												className="border-2 rounded-lg p-3 flex border-gray-300"
												required
												type="text"
												name="college_name"
												placeholder="College Name"
												value={colname}
												onChange={(e) => setColName(e.target.value)}
											/>
										</motion.div>
										<motion.div layout="position" className="flex flex-col">
											<label className="uppercase text-sm py-2 text-white">
												College Number
											</label>
											<input
												className="border-2 rounded-lg p-3 flex border-gray-300"
												type="tel"
												required
												pattern="[0-9]{10}"
												name="college_number"
												placeholder="College Number"
												value={contactnum}
												onChange={(e) => setContactNum(e.target.value)}
											/>
										</motion.div>
									</div>
									<h2 className="py-4 text-white">Event Participation</h2>
									<motion.div
										layout="position"
										className="grid md:grid-cols-2 gap-4 w-full py-2"
									>
										<EventRegisterCard
											title={"Mock Press"}
											no_input={[1]}
											eventParticipants={eventParticipants.mock_press}
											setEventParticipants={setEventParticipants}
										/>
										<EventRegisterCard
											title={"Circuit Designer"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.circuit_designer}
											setEventParticipants={setEventParticipants}
										/>
										<EventRegisterCard
											title={"Quiz"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.quiz}
											setEventParticipants={setEventParticipants}
										/>
										<EventRegisterCard
											title={"Treasure hunt"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.treasure_hunt}
											setEventParticipants={setEventParticipants}
										/>
										<EventRegisterCard
											title={"Videography"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.videography}
											setEventParticipants={setEventParticipants}
										/>
										<EventRegisterCard
											title={"Paper Presentation"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.paper_presentation}
											setEventParticipants={setEventParticipants}
										/>
									</motion.div>
									<button
										className="w-full p-4 mt-4 font-bold"
										style={{
											background: loader ? "#ccc" : "#fff",
											color: "#000",
										}}
									>
										Register
									</button>
								</form>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
