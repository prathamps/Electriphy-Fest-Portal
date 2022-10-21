import Image from "next/image"
import Link from "next/link"
import React from "react"
import videographyImg from "../public/assets/projects/videography.png"
import mockpressImg from "../public/assets/projects/mockpress.png"
import tresurehuntImg from "../public/assets/projects/treasurehunt.png"
import paperpresentationImg from "../public/assets/projects/paperpresentation.png"
import circuitdesignerImg from "../public/assets/projects/circuitdesigner.png"
import quizImg from "../public/assets/projects/quiz.png"
import EventItem from "./EventItem"

const Events = () => {
	return (
		<div id="events" className="w-full">
			<div className="max-w-[1240px] mx-auto py-16 flex flex-col justify-center place-items-center">
				<div>
					<p className="uppercase text-3xl font-medium tracking-widest text-[#f3bd7b] relative right-[-2rem]">
						Events
					</p>
					<h3 className="py-4 text-[#bbbbbb]">The fun and exciting events</h3>
				</div>
				<div>
					<div className="grid md:grid-cols-2 gap-8">
						<EventItem
							title="Videography"
							backgroundImg={videographyImg}
							projectUrl="/videography"
							tech="Pixels over the vaccum"
							rule1="1. One Person from every college."
							rule2="2. Prelims in the forenoon, finals before the valecdictory ceremony."
							rule3="3. No Usage of profane words"
							rule4="4. There will be a cross question by the judges and the audience and the evaluation is based on the performances "
							rule5="5. Participants will be informed of their characters an hour prior to the event"
							rule6="6. accessories will be provided to act out stuff"
						/>
						<EventItem
							title="Mock Press"
							backgroundImg={mockpressImg}
							projectUrl="/mockpress"
							tech="Knife to meet you"
							rule1="1. One Person from every college."
							rule2="2. Team must consist of two participants"
							rule3="3. All the necessary components and the circuit diagram shall be provided"
							rule4="4. After completing the cicuit, the circuit will be tested"
							rule5="5. Team whose circuit gives the required output first, wins"
						/>
						<EventItem
							title="Treasure Hunt"
							backgroundImg={tresurehuntImg}
							projectUrl="/treasurehunt"
							tech="Into the void"
							rule1="1. One Person from every college."
							rule2="2. Team must consist of two participants"
							rule3="3. Comprises of four rounds"
							rule4="4. Theme is physical sciences "
						/>
						<EventItem
							title="Paper Presentation"
							backgroundImg={paperpresentationImg}
							projectUrl="/paperpresentation"
							tech="Aura"
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
						<EventItem
							title="Circuit Assembly"
							backgroundImg={circuitdesignerImg}
							projectUrl="/circuitdesigner"
							tech="Execuit"
							rule1="1. One Team from every college."
							rule2="2. A team can consist of maximum 2 participants."
							rule3="3. All the necessary components and the circuit diagram shall be provided"
							rule4="4. Components will be provided on giving the right answer to the questions"
							rule5="5. After completing the circuit, the circuit will be tested"
							rule6="6. Team whose circuit gives the required output first, wins"
						/>
						<EventItem
							title="Quiz"
							backgroundImg={quizImg}
							projectUrl="/quiz"
							tech="May I Axe you a question"
							rule1="1. One Team from every college."
							rule2="2. A team can consist of maximum 2 participants."
							rule3="3. A soft copy should be submitted atleast a day prior to the event, along with a hard copy on the day."
							rule4="4. Each team will get 6 + 2 minutes to present their paper and two minutes will be devoted to question from the judges "
							rule5="5. The participants will have to present their papers in MsPowerPoint format only. Blantant plagiarism from the internet is not encourages and will not be entertained."
							rule6="6. The decision of the judges and event heads are considered definitive and binding for all and cannot be challeneged."
							rule7="7. Topics are resitricted to PU physics text book"
							rule8="8. Failure to comply with any of the rules may result in the paper being rejected."
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Events
