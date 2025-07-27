const ModalPrincipal = ({mainImage, title, description}) => {

	return (
		<>
			{/*Imagen principal*/}
			<img 
				src={`${mainImage}?text=${title}`} 
				alt={title} 
				className="w-full h-[400px] object-cover" 
			/>

			{/*Título y descripción*/}
			<div>
				<h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
				<p className="text-gray-300">{description}</p>
			</div>
		</>
	)
}

export default ModalPrincipal