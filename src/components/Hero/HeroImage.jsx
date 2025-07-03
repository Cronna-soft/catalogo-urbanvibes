import imgLogo from '../../assets/logo-site.png'

const HeroImage = () => {

	return (
		<div className="flex-1">
			<img 
				src={imgLogo} 
				alt="Modelo con ropa urbana en ambiente industrial" 
				className="w-full max-w-md mx-auto rounded-xl shadow-xl"
				loading="lazy"
			/>

		</div>
	)
}

export default HeroImage