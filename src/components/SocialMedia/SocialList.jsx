import SocialItems from './SocialItems.jsx'
import socialLinks from '../../data/socialLinks.json'

export const SocialList = () => {

	return (
	 <div className="flex flex-wrap gap-5 max-w-xl mx-auto">
		{socialLinks.map((media, index) => (
			<SocialItems key={index} social={media} />
		))}
	 </div>
	)
}