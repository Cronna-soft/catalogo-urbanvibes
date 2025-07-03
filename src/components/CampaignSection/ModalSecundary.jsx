const ModalSecundary = ({gallery, mainImage, setMainImage}) => {
	
	return (
		<>
			{gallery.map((src, index) => (
				<img
					key={index} 
					src={src} 
					alt={`Imagen Camáña ${index}`} 
					onClick={() => setMainImage(src)}
					className={`h-30 w-37 object-cover rounded-md cursor-pointer border-1 ${src === mainImage ? "border-black" : "border-transparent"} hover:scale-105 transition`}
				/>
			))}	
		</>	
	)
}

export default ModalSecundary