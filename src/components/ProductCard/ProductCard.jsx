import { Link } from 'react-router'

export const ProductCard = ({product}) => {

	const {id, name, image, description, price} = product

	return (
 			<Link to={`/producto/${name}/${id}`} key={id}>
 				<div className="gallery-items w-[210px] bg-white rounded-xl shadow hover:shadow-lg transition">
 					<img 
 						src={`${image}?text=${name}`} 
 						alt={name} 
 						className="w-full h-64 object-cover rounded-md mb-4"
 					/>

 					<div className=" p-4">
	 					<h3 className="text-lg font-semibold">{name}</h3>

	 					<p className="description-product-card text-xs font-light text-gray-400 mb-4">{description}</p>

	 					<p className="text-[var(--accent-color)] font-bold">${price.toFixed(2)}</p>
 					</div>
 				</div>
 			</Link>
	)
}