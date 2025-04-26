import Switch from 'react-switch';
import './header.css';
import { useTheme } from '../../context/useTheme';
import { useState } from 'react';

const Header = () => {
	const { isDarkTheme, toggleTheme } = useTheme();
	const [isMobileMenuOpen, setISMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setISMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
			{/* BLOCK ELEMENT MODIFIER */}
			<div className='nav__wrapper container'>
				<div className='nav__logo'><a href='#home'>Eoghan O'Mahony</a></div>
				<ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
					<li className='nav__menu-items'>
						<a href='#home'>Home</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#skills'>Skills</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li className='nav__menu-items'>
						<a href='/#/blog'>Blog</a>
					</li>
					<li className='buttons'>
						<label htmlFor='' className='switch'>
							<Switch
								height={24}
								width={48}
								onColor='#4D4D4D'
								offColor='#ccc'
								onChange={toggleTheme}
								checked={isDarkTheme}
							/>
						</label>
						<a href='#contact' className='button'>
							Contact Me
						</a>
					</li>
				</ul>
			</div>
			<div className='hamburger-menu' onClick={toggleMobileMenu}>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
			</div>
		</div>
	);
};

export default Header;
