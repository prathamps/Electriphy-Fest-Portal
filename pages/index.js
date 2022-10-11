import Link from "next/link"
import Head from "next/head"
import About from "../components/About"
import Main from "../components/Main"
import Events from "../components/Events"
import Sponsers from "../components/Sponsers"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import Footer from "../components/Footer"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Electiphy</title>
				<meta
					name="description"
					content="Electriphy is an electronics and physics fest conducted by St Aloysius College(Autonomous), Mangalore"
				/>
				<link rel="icon" href="/fav.png" />
			</Head>
			<Main />
			<About />
			<Sponsers />
			<Events />
			<div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<a>
							<div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
								<HiOutlineChevronDoubleUp
									className="text-[#928eff]"
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	)
}
