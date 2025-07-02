import { useState } from 'react' 
import CampaignModal from './CampaignModal.jsx'
import campaignData from '../../data/campaignData.json'

export const CampaignSection = () => {
	const [activeCampaign, setActiveCampaign] = useState(null)
	
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-10">Campañas Destacadas</h2>

				<div className="gallery-scroll flex gap-5 pb-2 mt-4">
					{campaignData.map((c) => (
						<div
							key={c.id} 
							onClick={() => setActiveCampaign(c)}
							className="gallery-items w-65 cursor-pointer overflow-hidden group rounded-lg shadow-lg"
						>
							<img
				                src={`${c.cover || c.gallery[0]}?text=${c.title}`}
				                alt={c.title}
				                className="w-full h-75 object-cover group-hover:scale-105 transition-transform duration-300"
              				/>
							<div className="p-4 bg-white">
								<h3 className="text-xl font-semibold">{c.title}</h3>
							</div>
						</div>
					))}
				</div>
			</div>

			{activeCampaign && (
				<CampaignModal campaign={activeCampaign} onClose={() => setActiveCampaign(null)} />
			)}
		</section>
	)
}