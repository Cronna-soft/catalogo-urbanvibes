import { useState } from 'react'
import { Link } from 'react-router'
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

		 		<div className="gallery-scroll flex px-6 py-3 gap-8 space-y-6">
		 			{filteredProducts.map((product) => (
		 				<FeaturedProductsItem key={product.id} product={product} />
		 			))}

		 			{/*Último elemento y enlace a productos*/}
		 			<div className="gallery-items h-[400px] w-[256px] bg-[#ffcccc] border-5 border-dashed border-[var(--accent-color)] rounded-lg shadow-lg overflow-hidden cursor-pointer">
						<Link to="/catalogo">
							<div className="p-4 h-full flex items-center justify-center flex-col gap-4 transition-transform duration-500 hover:scale-115">
								<i className="bi bi-plus-circle text-7xl text-[var(--accent-color)]"></i>
								<h5 className="text-3xl text-[var(--accent-color)]">Ver más</h5>
							</div>
						</Link>
					</div>
		 		</div>
	 		</div>
	 	</div>

	 </section>
	)
}