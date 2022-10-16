import React, { useState } from "react"
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"

import styles from "./Register.module.css"

// Framer motion

import { motion } from "framer-motion"
import { EventRegisterCard } from "./EventRegisterCard"
import { useRouter } from "next/router"
import { BsCheck } from "react-icons/bs"

export const Registration = () => {
	const [colname, setColName] = useState("")
	const [contactnum, setContactNum] = useState()
	const [eventParticipants, setEventParticipants] = useState({})
	const [checked, setChecked] = useState(false)

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
				agreed: checked,
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

	const handleChecked = () => {
		setChecked(!checked)
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
											rule4="4. There will be a cross questions by the judges and the audience and the evaluation is based on the performances "
											rule5="5. Participants will be informed of their characters an hour prior to the event"
											rule6="6. accessories will be provided to act out stuff"
										/>
										<EventRegisterCard
											title={"Circuit Designer"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.circuit_designer}
											setEventParticipants={setEventParticipants}
											description="Ciruit design - Execuit"
											rule1="1. One Team from every college."
											rule2="2. Team must consist of maximum 2 participants."
											rule3="3. All the necessary components and the circuit diagram shall be provided"
											rule4="4. Components will be provided on giving the right answer to the	questions"
											rule5="5. After completing the cicuit, the circuit will be tested"
											rule6="6. Team whose circuit gives the required output first, wins"
											rule7=" "
											rule8=" "
											rule9=" "
										/>
										<EventRegisterCard
											title={"Quiz"}
											no_input={[1, 2]}
											eventParticipants={eventParticipants.quiz}
											setEventParticipants={setEventParticipants}
											description="Quiz aka Zap"
											rule1="1. One Team per college."
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
											description="Treasure hunt aka Into the void"
											rule1="1. One Team from every college."
											rule2="2. A team can consist of maximum 4 participants."
											tule3="3. Every team will be timed"
											rule4="4. There will be boundaries set so you know where to look"
											rule5="5. Cheating, Sabotaging, Replacing items etc, will lead to instant disqualification. "
											rule6="6. No mingling with the other teams, or taking pictures of the campus prior to the event"
											rule7="7. A  team must stick together at all times"
											rule8="8. No asking for help with any of the people involved in the event, volunteers included"
											rule9="(Minimum 3 participants)"
										/>
										<EventRegisterCard
											title={"Videography"}
											no_input={[1, 2, 3]}
											eventParticipants={eventParticipants.videography}
											setEventParticipants={setEventParticipants}
											description="Videography aka Pixels over the vaccum"
											rule1="1. One Team from every college."
											rule2="2. Three make a team."
											rule3="3. Video can be edited."
											rule4="4. Creativity is welcomed. "
											rule5="5. Minimum requirements are for the video to be in 720p@30fps"
											rule6="6. Video must be submitted in mp4 format."
											rule7="7. Certain places are restricted around the campus venturing outside the campus or even beyond the gate is prohibited"
											rule8="8. Not compulsory for overall championship"
											rule9="(Minimum one participant)"
										/>
										<EventRegisterCard
											title={"Paper Presentation"}
											description="Paper Presentation aka aura"
											no_input={[1, 2]}
											eventParticipants={eventParticipants.paper_presentation}
											setEventParticipants={setEventParticipants}
											rule1="1. A team can consist of maximum 2 participants."
											rule2="2. Each team will get 5 + 1 minutes to present their papers and one minute will be devoted to question from the judges"
											rule3="The participants will have to present their papers in MS-Powerpoint(PPT) format only. Blantant plagiarism from the internet is not encouraged and will not be entertained."
											rule4="4. The decision of the judges and event heads are considered definitive and binding for all and cannot be challeneged."
											rule5="5. Topics are resitricted to PU physics syllabus"
											rule6="6. Failure to comply with any of the rules will result in the paper being rejected."
											rule7="(Minimum one participant)"
											rule8=" "
										/>
									</motion.div>
									<div className="flex flex-row">
										<div className={styles.React__checkbox}>
											<label>
												<input
													type="checkbox"
													className={styles.React__checkbox_input}
													checked={checked}
													required
													onChange={handleChecked}
												/>

												<span className={styles.span}>
													{!checked ? (
														""
													) : (
														<BsCheck
															color="white"
															className="z-20"
															size={100}
														/>
													)}
												</span>
											</label>
										</div>
										<div className="text-white w-full flex place-items-center pl-4">
											I have verified the given information in the above form
										</div>
									</div>
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
