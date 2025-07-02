import { Link } from 'react-router'

export const Gracias = () => {

	return (
		<section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="space-y-6 max-w-lg w-full bg-white p-10 rounded-lg shadow-lg text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">¡Gracias por tu mensaje!</h1>

				<p className="text-gray-600">
					Hemos recibido tu consulta y te responderemos lo antes posible.
				</p>

				<Link
					to="/"
					className="inline-block bg-white underline decoration-solid px-6 py-3 hover:bg-black hover:text-white hover:no-underline transition"
				>
					Volver al inicio
				</Link>
			</div>
		</section>
	)
}