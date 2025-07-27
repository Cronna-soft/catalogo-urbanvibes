import { Link } from 'react-router'

const HeroText = () => {

	return (
		<div className="flex-1 text-center md:text-left">
 			<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-left">
 				Estilo Urbano <span className="text-[var(--accent-color)]">Auténtico</span>
 			</h1>

 			<p className="text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
 				Descubre las últimas tendencias en ropa urbana. Luce increíble, siéntete único.
 			</p>

 			<Link
 				to="/catalogo"
 				className="inline-block bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition text-lg"
 			>
 				Explorar catálogo
 			</Link>
 		</div>
	)
}

export default HeroText