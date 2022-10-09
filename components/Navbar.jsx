import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/electriphy_logo.png"

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState(" ")
	const [linkColor, setLinkColor] = useState("#fff")
	// const [position, setPosition] = useState('fixed')
	// const router = useRouter();

	// useEffect(() => {
	//   if (
	//     router.asPath === '/property' ||
	//     router.asPath === '/crypto' ||
	//     router.asPath === '/netflix' ||
	//     router.asPath === '/twitch'
	//   ) {
	//     setNavBg('transparent');
	//     setLinkColor('#ecf0f3');
	//   } else {
	//     setNavBg('#ecf0f3');
	//     setLinkColor('#1f2937');
	//   }
	// }, [router]);

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
				setNavBg("radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)")
			} else {
				setShadow(false)
				setNavBg(" ")
			}
		}
		window.addEventListener("scroll", handleShadow)
	}, [])

	return (
		<div
			style={{ background: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<a>
						<Image
							src={NavLogo}
							alt="/"
							width="50"
							height="50"
							className="cursor-pointer"
						/>
					</a>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<li className="ml-10 mt-2 text-sm uppercase hover:border-b text-white">
							<Link href="/">Home</Link>
						</li>
						<li className="ml-10 mt-2 text-sm uppercase hover:border-b">
							<Link href="/#about">About</Link>
						</li>
						<li className="ml-10 mt-2 text-sm uppercase hover:border-b">
							<Link href="/#sponsers">Sponsers</Link>
						</li>
						<li className="ml-10 mt-2 text-sm uppercase hover:border-b">
							<Link href="/#events">Events</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b bg-white text-black font-bold rounded-xl w-36 h-8 p-2 flex place-content-center">
							<Link href="/register">Registeration</Link>
						</li>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				{/* Side Drawer Menu */}
				<div
					style={{
						background:
							"radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
					}}
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<a>
									<Image src={NavLogo} width="35" height="35" alt="/" />
								</a>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-700 text-white p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
					</div>
					<div className="py-4 flex flex-col text-white">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#sponsers">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Sponsers
								</li>
							</Link>
							<Link href="/#events">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Events
								</li>
							</Link>
							<Link
								href="/register"
								className="bg-[#bbbbbb] text-black rounded-lg"
							>
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Registeration
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
