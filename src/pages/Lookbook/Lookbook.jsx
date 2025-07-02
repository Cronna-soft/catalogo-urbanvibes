import { useState } from 'react'
import { LookbookGrid } from '../../components'
import lookbookData from '../../data/lookbookData.json'

export const Lookbook = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const [visibleCount, setVisibleCount] = useState(6)
	const visibleImages = lookbookData.slice(0, visibleCount)

	return (
		<section className="py-12 px-6 max-w-6xl mx-auto">
			{/*MODAL IMAGEN DEL COMPONENTE*/}
			{selectedImage && (

				<div 
					onClick={() => setSelectedImage(null)}
					className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
				>
					<img 
						src={`${selectedImage.image}?text=${selectedImage.alt}`} 
						alt={lookbookData.alt} 
						className="w-3xl max-h-[80vh] rounded-lg shadow-lg"
					/>
					
					<button 
						onClick={() => setSelectedImage(null)}
						className="absolute top-4 right-4 text-white text-2xl px-4 py-2 rounded hover:font-bold transition"
					>
						<i className="bi bi-x-lg"></i>
					</button>
				</div>

			)}

			{/*COMPONENTE LOOKBOOK*/}
			<LookbookGrid lookbook={visibleImages} onImageClick={setSelectedImage} />

			{/*BOTON "VER MÁS*/}
			{/*Paso una condicional que dice: "Si 'visibleCount' es menor que el ancho del listado 'lookbookData' es true."*/}
			{visibleCount < lookbookData.length && (

				<div className="text-center mt-8">
					<button 
						onClick={() => setVisibleCount(prev => prev + 3)}
						className="px-6 py-3 bg-black text-white rounded hover:bg-white hover:border-2 hover:border-black hover:text-black transition"
					>
						Ver más
					</button>
				</div>

			)}
		</section>	
	)
}