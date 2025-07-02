const SocialItems = ({social}) => {
	const {name, user, icon, url} = social

	return (
		<a 
			href={url} 
			target="_blank"
			rel="noopener noreferrer"
			className="social-media py-5 text-white flex items-center gap-4 text-4xl pr-5 transition-transform hover:text-[var(--neon-color)] hover:shadow-lg hover:scale-110 duration-300"
			title={name}
		>
			<i className={icon}></i>
			<h5 className="social-media-name font-semi-bold">/{user}</h5>
		</a>
	)
}

export default SocialItems