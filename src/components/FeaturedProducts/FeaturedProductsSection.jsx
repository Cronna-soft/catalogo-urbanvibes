import { useState } from 'react'
import FeaturedProductsItem from './FeaturedProductsItem'
import { CategoryProducts } from '../../components'
import featuredProducts from '../../data/featuredProducts.json'

export const FeaturedProductsSection = () => {
	const [activeCategory, setActiveCategory] = useState("todas")

	const filteredProducts = activeCategory === "todas" ? featuredProducts : featuredProducts.filter(p => p.category === activeCategory)

	return (
	 <section className="py-20 bg-gray-100 text-gray-800">

	 	<div className="max-w-7xl mx-auto px-4">
	 		<h2 className="bg-white py-3 text-2xl border-b-3 rounded-t-md font-bold text-center">Lo Más Destacadas</h2>

	 		<div className="border-3 border-white border-t-0 py-10 rounded-b-md">
		 		<div className="flex justify-center gap-4 mb-10 flex-wrap">
		 			<CategoryProducts 
		 				activeCategory={activeCategory} 
		 				setActiveCategory={setActiveCategory}
		 			/>
		 		</div>	

		 		<div className="px-6 gallery-scroll py-3 gap-8">
		 			{filteredProducts.map((product) => (
		 				<FeaturedProductsItem key={product.id} product={product} />
		 			))}
		 		</div>
	 		</div>
	 	</div>

	 </section>
	)
}