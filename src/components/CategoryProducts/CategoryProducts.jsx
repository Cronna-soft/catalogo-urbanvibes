
export const CategoryProducts = ({activeCategory, setActiveCategory}) => {
	
const categories = ["todas", "ropa", "calzado", "accesorios"]

	return (
		<>
 			{categories.map(cat => (
 				<button 
 					key={cat}
 					onClick={() => setActiveCategory(cat)}
 					className={`px-4 py-2 rounded-full border cursor-pointer ${
 						activeCategory === cat 
 						? "bg-black text-white hover:bg-white hover:text-black"
 						: "bg-white text-black hover:bg-black hover:text-white"
 					}`}
 				>
 					{cat.charAt(0).toUpperCase() + cat.slice(1)}
 				</button>
 			))}
	 	</>
	)
}