import { useState } from 'react'
import { ProductCard, CategoryProducts } from '../../components'
import products from '../../data/products.json'

export const CatalogPage = () => {
	const [activeCategory, setActiveCategory] = useState("todas")

	const filteredProducts = activeCategory === "todas" ? products : products.filter(p => p.category === activeCategory)

	return (
	 <section className="max-w-6xl mx-auto px-4 py-20">
	 	<h2 className="text-3xl font-bold mb-10 text-center">Catálogo Completo</h2>
		
 		<div className="flex justify-center gap-4 mb-10 flex-wrap">
 			<CategoryProducts 
 				activeCategory={activeCategory} 
 				setActiveCategory={setActiveCategory}
 			/>
 		</div>

	 	<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
	 		{filteredProducts.map((product) => (
		 		<ProductCard key={product.id} product={product} />
 			))}
	 	</div>
	 </section>
	)
}