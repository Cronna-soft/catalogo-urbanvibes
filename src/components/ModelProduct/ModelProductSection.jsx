import ModelProductItem from './ModelProductItem.jsx'
import modelProduct from '../../data/modelProduct.json'

export const ModelProductSection = () => {
	
	return (
		<section className="py-20 bg-gray-50 h-[80vh]">
			<div className="max-w-6xl h-full mx-auto px-4">

				<div className="flex w-full h-full gap-2 md:gap-6">
					<ModelProductItem products={modelProduct} />
				</div>

			</div>
		</section>
	)
}