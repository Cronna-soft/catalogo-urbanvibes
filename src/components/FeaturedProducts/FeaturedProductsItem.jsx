import { Link } from 'react-router'
import { motion } from 'motion/react'

const FeaturedProductsItem = ({ product }) => {
	const {name, price, image} = product

	return (
		<motion.div 
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="gallery-items bg-white rounded-lg shadow-lg overflow-hidden">
			<img 
				src={`${image}?text=${name}`} 
				alt={name}
				className="w-full h-64 object-cover" 
			/>

			<div className="p-4">
				<h3 className="text-xl font-semibold text-gray-800">{name}</h3>
				<p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
				<Link to={`/producto/${product.name}/${product.id}`}>
					<button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
					Ver más</button>
				</Link>
			</div>
		</motion.div>
	)
}

export default FeaturedProductsItem