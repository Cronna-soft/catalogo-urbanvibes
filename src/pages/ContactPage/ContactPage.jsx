import { ContactForm, ContactBanner } from '../../components'

export const ContactPage = () => {

	// Escribe el correo que estes usando para recibir los mensajes
	const tuCorreo = "tucorreo@ejemplo.com"
	// Escribe el link de la página de la respuesta despues de enviar el formulario
	const respuestaFormulario = "http://localhost:5173/gracias"

	return (
		<section className="relative bg-gray-100 min-h-screen">
			{/*Imagen de fondo tipo banner*/}
			<div className="absolute inset-0">

				<ContactBanner />

			</div>

			<div className="relative z-10 flex items-center justify-center h-full px-4 py-24">

				<ContactForm correo={tuCorreo} respuesta={respuestaFormulario} />

			</div>
		</section>
	)
}