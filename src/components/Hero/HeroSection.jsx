import { motion } from 'motion/react'
import { SocialList } from '../../components'
import HeroText from './HeroText.jsx'
import HeroImage from './HeroImage.jsx'
import imgBanner from '../../assets/hero-banner.png'

export const HeroSection = () => {

	return (
	 <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
	 	
 		{/*Imagen de fondo con gradiente*/}
 		<div className="absolute inset-0">
 			<img 
 				src={imgBanner} 
 				alt="Fondo urbano" 
 				className="w-full h-full object-cover opacity-30" 
 			/>
 			<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
 		</div>

 		{/*Contenido principal*/}
 		<div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
 			<motion.div
 				className="w-full"
				initial={{ opacity: 0, x: -50 }} 				
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
 			>
		 		{/*Texto*/}
		 		<HeroText />
 			</motion.div>

 			<motion.div
 				className="w-full"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
 			>
		 		{/*Imagen*/}
		 		<HeroImage />
 			</motion.div>
 		</div>

		<div className="absolute right-0 bottom-0">
			<SocialList />
		</div>
	 </section>
	)
}