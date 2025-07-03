import FooterSocialDev from './FooterSocialDev'
import FooterContact from './FooterContact'
import imgLogo from '../../assets/logo-site.png'

export const FooterSection = () => {

	return (
	 <footer className="bg-black px-3 py-6 text-center">
	 	<div className="flex flex-wrap grow justify-evenly items-center text-white space-y-6 p-4 gap-2">
	 		{/*Logotipo*/}
	 		<img 
	 			src={imgLogo}
	 			alt="" 
	 			className="w-20 h-20 object-cover"
	 		/>

	 		{/*Marca*/}
	 		<div>
	 			<h3 className="text-xl font-bold mb-2">UrbanVibes</h3>
	 			<p className="italic">Estilo callejero con identidad propia.</p>
	 		</div>

	 		{/*Contacto*/}
	 		<FooterContact />
	 	</div>

	 	<div className="flex flex-wrap justify-center lg:justify-between text-center items-center text-white mt-4 p-2 space-y-5">
	 		{/*Derechos DEV*/}
	 		<div className="flex flex-start text-center">
	 			<p>Derechos Reservados &copy; {new Date().getFullYear()} | Proyecto: UrbanVibes</p>
	 		</div>


	 		{/*Derechos diseñado*/}
	 		<div className="flex flex-col sm:flex-row items-center sm:flex-end gap-5 md:gap-20">
		 		{/*Redes sociales DEV*/}
		 		<div className="flex gap-7">
		 			<FooterSocialDev />
		 		</div>

	 			<h6 className="font-bold">Diseñado por Cronna Soft</h6>
	 		</div>
	 	</div>
	 </footer>
	)
}