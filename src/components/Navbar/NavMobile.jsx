import { NavLink } from 'react-router'

const NavMobile = ({navLinks, closeMenu, menuOpen}) => {

	return (
		<>
	 		{menuOpen && (
	 			<ul className="md:hidden bg-white px-4 pb-4 flex flex-col items-center gap-4 text-lg font-semibold text-gray-700 transition-all duration-300">
	 				{navLinks.map(({to, label}) => (
						<li key={to}>
							<NavLink
								to={to}
								onClick={closeMenu}
								className={({isActive}) => isActive ? "text-[var(--accent-color)]" : "hover:text-[var(--accent-color)] transition"}
							>
							 {label}
							</NavLink>
						</li>
	 				))}
	 			</ul>
	 		)}
	 	</>
	)
}

export default NavMobile