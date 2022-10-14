import React, { useState } from "react"
import { db } from "./firebase"
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
												College Contact Number
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
											description="Mock Press aka Knife to meet you"
											rule1="1. One Person from every college."
											rule2="2. Prelims in the forenoon, finals before the valecdictory ceremony."
											rule3="3. No Usage of profane words"
											rule4="4. There will be a cross question by the judges and the audience and the evaluation is based on the performances "
											rule5="5. Participants will be informed of their characters an hour prior to the event"
											rule6="6. accessories will be provided to act out stuff"
										/>
										<EventRegisterCard
											title={"Circuit Designer"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.circuit_designer}
											setEventParticipants={setEventParticipants}
											description="Ciruit design - Execuit"
											rule1="1. One Person from every college."
											rule2="2. Team must consist of two participants"
											rule3="3. All the necessary components and the circuit diagram shall be provided"
											rule4="4. After completing the cicuit, the circuit will be tested"
											rule5="5. Team whose circuit gives the required output first, wins"
											rule6=" "
											rule7=" "
											rule8=" "
											rule9=" "
										/>
										<EventRegisterCard
											title={"Quiz"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.quiz}
											setEventParticipants={setEventParticipants}
											description="Mock Press aka Knife to meet you"
											rule1="1. One Person from every college."
											rule2="2. Team must consist of two participants"
											rule3="3. Comprises of four rounds"
											rule4="4. Theme is physical sciences "
											rule5=" "
											rule6=" "
											rule7=" "
											rule8=" "
											rule9=" "
										/>
										<EventRegisterCard
											title={"Treasure hunt"}
											no_input={[1, 2, 3, 4]}
											eventParticipants={eventParticipants.treasure_hunt}
											setEventParticipants={setEventParticipants}
											description="Mock Press aka Knife to meet you"
											rule1="1. One Person from every college."
											rule2="2. A team can consist of maximum 4 participants."
											rule3="3. One mobile phone is permitted per Team (Must have an active data connection)."
											rule4="4. Every team will be timed. "
											rule5="5. There will be boundaries set so you know where to look"
											rule6="6. Cheating, Sabotaging, Replacing items etc, will lead to instant disqualification."
											rule7="7. No mingling with the other teams, or taking pictures of the campus prior to the event"
											rule8="8. A  team must stick together at all times"
											rule9="9. No asking for help with any of the people involved in the event, volunteers included "
										/>
										<EventRegisterCard
											title={"Videography"}
											no_input={[1, 2, 3]}
											eventParticipants={eventParticipants.videography}
											setEventParticipants={setEventParticipants}
											rule1="1. One Team from every college."
											rule2="2. A team can consist of maximum 3 participants."
											rule3="3. Video can be edited."
											rule4="4. Creativity is welcomed. "
											rule5="5. Minimum requirements are for the video to be in 720p@30fps"
											rule6="6. Video must be submitted in mp4 format."
											rule7="7. Certain places are restricted around the campus"
											rule8="8. No going outside the campus not even the gate"
										/>
										<EventRegisterCard
											title={"Paper Presentation"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.paper_presentation}
											setEventParticipants={setEventParticipants}
											rule1="1. One Team from every college."
											rule2="2. A team can consist of maximum 2 participants."
											rule3="3. A soft copy should be submitted atleast a day prior to the event, along with a hard copy on the day."
											rule4="4. Each team will get 6 + 2 minutes to present their paper and two minutes will be devoted to question from the judges "
											rule5="5. The participants will have to present their papers in MsPowerPoint format only. Blantant plagiarism from the internet is not encourages and will not be entertained."
											rule6="6. The decision of the judges and event heads are considered definitive and binding for all and cannot be challeneged."
											rule7="7. Topics are resitricted to PU physics text book"
											rule8="8. Failure to comply with any of the rules may result in the paper being rejected."
											rule9=" "
										/>
									</motion.div>
									<div className="w-full flex place-content-center p-8">
										<button
											className="w-full md:w-1/4 rounded-2xl p-4 mt-4 font-bold"
											style={{
												background: loader ? "#ccc" : "#fff",
												color: "#000",
											}}
										>
											Register
										</button>
									</div>
								</form>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
