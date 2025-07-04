const ButtonMobile = ({onToggleMenu, menuOpen}) => {

	return (
		<button 
			onClick={onToggleMenu}
			className="md:hidden text-gray-700 focus:outline-none"
			aria-label="Abrir menú"
		>

			{menuOpen ? (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
			) : (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			)}
		</button>
	)
}

export default ButtonMobile