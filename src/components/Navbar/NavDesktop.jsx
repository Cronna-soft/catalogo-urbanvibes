import { NavLink } from 'react-router'

const NavDesktop = ({navLinks, closeMenu}) => {

	return (
		<>
			<ul className="nav-desktop hidden md:flex items-center gap-8 text-gray-700 text-md font-semibold">
				{navLinks.map(({to, label}) => (
					<li key={to}>
						<NavLink
							to={to}
							onClick={closeMenu}
							className={({ isActive }) => isActive ? "text-[var(--accent-color)]" : "hover:text-[var(--accent-color)] transition"}
						>
						 {label}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	)
}

export default NavDesktop