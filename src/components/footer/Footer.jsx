import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bg})` }}>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<div className="logo">
						<img src={logo} alt="" />
						<Link to="/">FléXHub</Link>
					</div>
				</div>
				<div className="footer__content__menus">
					<div className="footer__content__menu">
						<Link to="/">Home</Link>
						<Link to="/">Contact us</Link>
						<Link to="/">Term of services</Link>
						<Link to="/">About us</Link>
					</div>
					<div className="footer__content__menu">
						<Link to="/">Live</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Premium</Link>
						<Link to="/">Pravacy policy</Link>
					</div>
					<div className="footer__content__menu">
						<Link to="/">You must watch</Link>
						<Link to="/">Recent release</Link>
						<Link to="/">Top IMDB</Link>
					</div>
				</div>
			</div>
			<div className="footer__github">
				<a href="https://github.com/Femil32/FleXHub" className="footer__github__link">
					<p>Fork this project</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
						<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Footer;
