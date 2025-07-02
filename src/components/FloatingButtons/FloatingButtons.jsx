import { useEffect, useState } from 'react'

export const FloatingButtons = () => {

	const whatsappData = {
		icon: "bi bi-whatsapp",
		url: ""
	}

	const [showCroll, setShowCroll] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowCroll(window.scrollY > 200)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<div className="fixed bottom-20 right-5 flex flex-col gap-4 z-50 text-center">
			{/*WhatsApp*/}
			<a 
				href={whatsappData.url}
				target="_blank"
				rel="noopener noreferrer"
				className="w-15 h-15 text-3xl bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
				title="Contáctame"
			>
				<i className={whatsappData.icon}></i>
			</a>

			{/*Volver arriba*/}
			<button 
				onClick={scrollToTop}
				className="w-15 h-15 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition"
				title="Volver arriba"
			>
				<i className="bi bi-arrow-up"></i>
			</button>
		</div>
	)
}