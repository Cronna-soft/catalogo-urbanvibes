import { useNavigate, useParams } from 'react-router'
import { ProductCard } from '../../components'
import products from '../../data/products.json'

export const ProductDetail = () => {
	const { id, name } = useParams()
	const product = products.find(p => p.id === parseInt(id) && p.name === String(name))

	const navigate = useNavigate()

	const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).sort(() => 0.5 - Math.random()).slice(0, 4) //solo 4 productos

	if (!product) {
		return (
			<div className="text-center py-20">
				<h2 className="text-2xl font-bold mb-4">Producto no encontrado.</h2>

				<button 
					onClick={() => navigate("/catalogo")}
					className="mt-4 inline-block underline decoration-solid text-[var(--accent-color)] py-3 rounded hover:text-[var(--neon-color)] transition" 
				>
					Volver al catálogo
				</button>
			</div>
		)
	}

	return (
		<section className="bg-gray-100 max-w-6xl mx-auto rounded-md my-10 p-5 sm:p-15">
			
			<div className="grid md:grid-cols-2 gap-10">
				<img 
					src={`${product.image}?text=${product.name}`} 
					alt={product.name}
					className="w-full rounded-lg shadow-lg" 
				/>

				<div>
					<h1 className="text-3xl font-bold mb-4">{product.name}</h1>

					<p className="text-gray-700 mb-2">
						{product.category.charAt(0).toUpperCase() + product.category.slice(1)}
					</p>

					<p className="bg-gray-200 text-3xl text-[var(--accent-color)] font-semibold rounded-lg mb-6 p-4">${product.price.toFixed(2)}</p>

					<p className="mb-8 text-gray-600 leading-relaxed">{product.description}</p>

					<button
						onClick={() => navigate("/catalogo")}
						className="mt-8 inline-block underline decoration-solid text-gray-700 py-3 rounded hover:text-[var(--accent-color)] transition"
					>
						Volver al catálogo
					</button>
				</div>
			</div>

			{relatedProducts.length > 0 && (
				<div className="mt-16">
					<h3 className="text-2xl font-bold mb-6 text-gray-800">
						Otros productos similares
					</h3>
					<div className="gallery-scroll gap-6">
						{relatedProducts.map((prod) => (
							<ProductCard key={prod.id} product={prod} />
						))}
					</div>
				</div>
			)}
		</section>
	)
}