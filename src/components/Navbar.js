import React, { useState } from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../components/css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import icons from '../constants/social-icons';
import logo from '../images/logo.svg';

const Navbar = () => {
	const [ isOpen, setNav ] = useState(false);
	const toggleNav = () => {
		setNav((isOpen) => !isOpen);
	};
	console.log(isOpen);
	return (
		<nav className={styles.navbar}>
			<div className={styles.navCenter}>
				<div className={styles.navHeader}>
					<img src={logo} alt="backroads logo" />
					<button type="button" className={styles.logoBtn} onClick={toggleNav}>
						<FaAlignRight className={styles.logoIcon} />
					</button>
				</div>
				<ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
					{links.map((item, index) => {
						return (
							<li key={index}>
								<AniLink fade to={item.path}>
									{item.text}
								</AniLink>
							</li>
						);
					})}
				</ul>
				<div className={styles.navSocialLinks}>
					{icons.map((item, index) => {
						return (
							<a key={index} href={item.url} target="blank" rel="noopener noreferrer">
								{item.icon}
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;