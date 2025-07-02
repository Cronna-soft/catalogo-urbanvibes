 import { useState } from 'react'
import { Link } from 'react-router'
import NavDesktop from './NavDesktop.jsx'
import NavMobile from './NavMobile.jsx'
import ButtonMobile from './ButtonMobile.jsx'
import navLinks from '../../data/navLinks.json'
import navImage from '../../assets/nav-image.png'

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)
	const closeMenu = () => setMenuOpen(false)

	return (
	 	<nav className="sticky top-0 z-50 bg-white shadow-md">
	 		<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
	 			{/*LOGO*/}
	 			<Link to="/" className="text-2xl font-bold text-gray-900">
	 				<img className="nav-image" src={navImage} alt="Imagen Nav Cronna" title="UrbanVibes" />
	 			</Link>
	 			
	 			{/*DESKTOP MENÚ*/}
	 			<NavDesktop navLinks={navLinks} onCloseMenu={closeMenu} />

	 			{/*MOBILE BOTON*/}
	 			<ButtonMobile onToggleMenu={toggleMenu} menuOpen={menuOpen} />
	 		</div>

	 		{/*MOBILE MENU*/}
	 		<NavMobile navLinks={navLinks} onCloseMenu={closeMenu} menuOpen={menuOpen} />
	 	</nav>
	)
}