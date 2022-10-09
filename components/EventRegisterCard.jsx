import React, { useState } from "react"
import { motion } from "framer-motion"

export const EventRegisterCard = ({
	title,
	no_input,
	eventParticipants,
	setEventParticipants,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const [studentname1, setStudentName1] = useState()
	const [studentclass1, setStudentClass1] = useState()
	const [studentname2, setStudentName2] = useState()
	const [studentclass2, setStudentClass2] = useState()

	const handleChange = () => {
		let updatedValue
		no_input.length > 1
			? (updatedValue = {
					participant_1: {
						name: studentname1,
						class: studentclass1,
					},
					participant_2: {
						name: studentname1,
						class: studentclass1,
					},
			  })
			: (updatedValue = {
					participant_1: {
						name: studentname1,
						class: studentclass1,
					},
			  })
		switch (title) {
			case "Mock Press":
				setEventParticipants((oldEventParticipants) => {
					return { ...oldEventParticipants, mock_press: { ...updatedValue } }
				})
				break
			case "Circuit Designer":
				setEventParticipants((oldEventParticipants) => {
					return {
						...oldEventParticipants,
						circuit_designer: { ...updatedValue },
					}
				})
				break
			case "Quiz":
				setEventParticipants((oldEventParticipants) => {
					return { ...oldEventParticipants, quiz: { ...updatedValue } }
				})
				break
			case "Treasure hunt":
				setEventParticipants((oldEventParticipants) => {
					return { ...oldEventParticipants, treasure_hunt: { ...updatedValue } }
				})
				break
			case "Videography":
				setEventParticipants((oldEventParticipants) => {
					return { ...oldEventParticipants, videography: { ...updatedValue } }
				})
				break
			case "Paper Presentation":
				setEventParticipants((oldEventParticipants) => {
					return {
						...oldEventParticipants,
						paper_presentation: { ...updatedValue },
					}
				})
				break
		}
	}

	return (
		<div>
			<motion.div
				layout
				transition={{ layout: { duration: 1, type: "spring" } }}
				className="card bg-slate-500 px-8 py-12 grid place-content-center rounded-2xl"
				onClick={(e) => {
					setIsOpen(!isOpen)
				}}
			>
				<motion.h2 layout="position">{title}</motion.h2>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="max-w-[1240px]"
					>
						<p className="pt-4">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Quibusdam non deleniti totam quae esse laboriosam quasi expedita
							animi illo maxime?
						</p>
						<p class Name="pt-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
							dolore.
						</p>
						{no_input.length > 1 ? (
							<h4 className="pt-2">Two Participant</h4>
						) : (
							<h4 className="pt-2">One Participant</h4>
						)}

						<motion.div layout="position" className="w-full py-2">
							{no_input.length > 1 ? (
								<motion.div className="grid md:grid-cols-1 ">
									<motion.div className="flex flex-col md:flex-row">
										<motion.div layout="position" className="flex flex-col">
											<label className="uppercase text-sm py-2">
												Student Name
											</label>
											<input
												className="border-2 rounded-lg p-2 flex border-gray-300"
												type="text"
												name="student_name"
												placeholder="Student Name"
												value={studentname1}
												onChange={(e) => {
													setStudentName1(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
										<motion.div
											layout="position"
											className="flex flex-col md:pl-12"
										>
											<label className="uppercase text-sm py-2">
												Student Class
											</label>
											<input
												className="border-2 rounded-lg p-2  flex border-gray-300"
												type="text"
												name="student_class"
												placeholder="Student Class"
												value={studentclass1}
												onChange={(e) => {
													setStudentClass1(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
									</motion.div>
									<motion.div className="flex flex-col  md:flex-row">
										<motion.div layout="position" className="flex flex-col">
											<label className="uppercase text-sm py-2">
												Student Name
											</label>
											<input
												className="border-2 rounded-lg p-2 flex border-gray-300"
												type="text"
												name="student_name"
												placeholder="Student Name"
												value={studentname2}
												onChange={(e) => {
													setStudentName2(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
										<motion.div
											layout="position"
											className="flex flex-col md:pl-12"
										>
											<label className="uppercase text-sm py-2">
												Student Class
											</label>
											<input
												className="border-2 rounded-lg p-2  flex border-gray-300"
												type="text"
												name="student_class"
												placeholder="Student Class"
												value={studentclass2}
												onChange={(e) => {
													setStudentClass2(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
									</motion.div>
								</motion.div>
							) : (
								<>
									<motion.div className="flex flex-col md:flex-row">
										<motion.div layout="position" className="flex flex-col">
											<label className="uppercase text-sm py-2">
												Student Name
											</label>
											<input
												className="border-2 rounded-lg p-2 flex border-gray-300"
												type="text"
												name="student_name"
												placeholder="Student Name"
												value={studentname1}
												onChange={(e) => {
													setStudentName1(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
										<motion.div
											layout="position"
											className="flex flex-col md:pl-12"
										>
											<label className="uppercase text-sm py-2">
												Student class
											</label>
											<input
												className="border-2 rounded-lg p-2  flex border-gray-300"
												type="text"
												name="student_class"
												placeholder="Student Class"
												value={studentclass1}
												onChange={(e) => {
													setStudentClass1(e.target.value)
													handleChange()
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										</motion.div>
									</motion.div>
								</>
							)}
						</motion.div>
					</motion.div>
				)}
			</motion.div>
		</div>
	)
}