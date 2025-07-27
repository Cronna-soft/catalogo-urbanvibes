import { useState } from "react"
import ModalPrincipal from "./ModalPrincipal.jsx"
import ModalSecundary from "./ModalSecundary.jsx"

const CampaignModal = ({campaign, onClose}) => {

	const [mainImage, setMainImage] = useState(campaign.cover || campaign.gallery[0])

	if (!campaign) {return null}

	return (
		<div 
			onClick={onClose}
			className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4 cursor-pointer" 
		>
			<div
				onClick={(e) => e.stopPropagation()} 
				className="bg-gray-200 rounded-lg shadow-2xl max-w-5xl w-full p-10 space-y-6 cursor-default"
			>	
				{/*Imagen principal, título y descripción*/}
				<div className="flex flex-col md:grid md:grid-cols-2 justify-evenly gap-8">
					<ModalPrincipal mainImage={mainImage} title={campaign.title} description={campaign.description} />
				</div>
				
				{/*Galería de imágenes*/}
				<div className="overflow-x-auto flex gap-4 pb-2 mt-2">
						<ModalSecundary gallery={campaign.gallery} mainImage={mainImage} setMainImage={setMainImage} />
				</div>

				{/* Botón cerrar */}
				<button
				  onClick={onClose}
				  className="block ml-auto mt-6 px-5 py-2 text-black hover:bg-black hover:text-white rounded transition"
				>
					<i className="bi bi-x-lg"></i>
				</button>
			</div>
		</div>
	)
}

export default CampaignModal