const ModelProductItem = ({products}) => {
	
	return (
		<>
		 {products.map(({name, image}, index) => (
		 	<img 
		 		key={index} 
		 		src={`${image}?text=${name}`} 
		 		alt={`Modelo de ${name}`} 
		 		className="w-0 h-auto grow object-cover opacity-80 transition duration-500 hover:cursor-crosshair hover:w-90 hover:opacity-100 hover:contrast-110"
		 		/>
		 ))}
		</>
	)
}

export default ModelProductItem