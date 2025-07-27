import brands from "../../data/brands.json"

export const BrandStrip = () => {

	const brand = [...brands, ...brands];

	return (
	 <section className="bg-white py-6 overflow-hidden">
	 	<div className="animate-scroll px-8">
	 		{brand.map((src, index) => (
	 			<img 
	 				key={index}
	 				src={`${src}?text=Marca+${index}`} 
	 				alt={`Marca ${index}`} 
	 				className="h-25 sm:h-50 grayscale opacity-80 hover:opacity-100 transition"
	 			/>
	 		))}
	 	</div>
	 </section>
	)
}