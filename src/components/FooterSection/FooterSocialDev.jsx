const FooterSocialDev = () => {
	const redSocial = [
		{
			name: "Github",
			icon: "bi bi-github",
			url: "https://github.com/Cronna-soft/"
		},
		{
			name: "Instagram",
			icon: "bi bi-instagram",
			url: "https://www.instagram.com/mr.dannnor_"
		},
		{
			name: "Linkedin",
			icon: "bi bi-linkedin",
			url: "https://www.linkedin.com/in/dannnor"
		},
		{
			name: "WhatsApp",
			icon: "bi bi-whatsapp",
			url: "https://api.whatsapp.com/send?phone=573175403782"
		}
	]

	return (
		<>
		 {redSocial.map((media, index) => (
			<a 
				key={index}
				href={media.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-white hover:text-[var(--accent-color)] flex gap-3 text-xl transform hover:scale-110 transition duration-300"
				title={media.name}
			>
				<i className={media.icon}></i>
			</a>
		 ))}
		</>
	)
}

export default FooterSocialDev