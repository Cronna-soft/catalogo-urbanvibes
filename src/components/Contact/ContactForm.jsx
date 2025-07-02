export const ContactForm = ({correo, respuesta}) => {

	return (
		<div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-8 md:mt-15 lg:mt-30">
			<h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>

			<p className="text-sm font-extralight italic my-10">¿Quieres revender nuestra ropa? ¿Te interesa un diseño personalizado? Escríbenos.</p>

			<form 
				action={`https://formsubmit.co/${correo}`} 
				method="POST"
				className="space-y-6" 
			>
				<input 
					type="text" 
					name="name" 
					placeholder="Tu nombre"
					required
					className="w-full border border-gray-300 px-4 py-2 rounded"
				/>

				<input 
					type="email" 
					name="email" 
					placeholder="Tu correo"
					required
					className="w-full border border-gray-300 px-4 py-2 rounded"
				/>

				<textarea 
					name="message" 
					rows="5" 
					placeholder="Haznos llegar tu mensaje"
					required
					className="w-full border border-gray-300 px-4 py-2 rounded"
				/>
				
				{/*Campos ocultos útiles*/}
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value={`${respuesta}`} />

				<button
					type="submit"
					className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
				>
				 Enviar mensaje
				</button>
			</form>
		</div>
	)
}