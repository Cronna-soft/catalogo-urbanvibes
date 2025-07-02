import { motion } from 'motion/react'

export const LookbookGrid = ({lookbook, onImageClick}) => {

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{lookbook.map(({id, image, alt}, index) => (
				<motion.div 
					key={id}
					onClick={() => onImageClick({image, alt})}
					className="overflow-hidden shadow-lg cursor-pointer group" 
					initial={{ opacity: 0, scale: 0.8, y: 30 * ((index % 3) - 1) }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ delay: index * 0.1, duration: 0.5 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<img 
						src={`${image}?text=${alt}`} 
						alt={alt} 
						className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</motion.div>
			))}
		</div>
	)
}