import React, { useState, useContext } from 'react';
import Menu from '../components/Menu.jsx';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder.jsx';
import Mobile from '../components/Mobile.jsx';
import styles from '../styles/Header.module.scss';
import Link from 'next/link.js';
import Image from 'next/image.js';

import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMobile, setToggleMobile] = useState(false);
	const { state } = useContext(AppContext);

	return (
		<nav className={styles.Nav}>
			<Image src= {menu} alt="menu" className={styles.menu} onClick = {() => {setToggleMobile(!toggleMobile);}}/>
			<div className={styles['navbar-left']}>
				<Link href="/">
				<Image src= {logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/">Clothes</Link>
					</li>
					<li>
						<Link href="/">Electronics</Link>
					</li>
					<li>
						<Link href="/">Furnitures</Link>
					</li>
					<li>
						<Link href="/">Toys</Link>
					</li>
					<li>
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-email']} onClick ={() => setToggle(!toggle)} >
						platzi@example.com
					</li>
					<li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)} >
						<Image src= {shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
					</li>
				</ul>
			</div>
			
			{toggle ? <Menu /> : ""}	
			{toggleOrders ? <MyOrder toggleOrders= {toggleOrders} setToggleOrders= {setToggleOrders}/> : ""}	
			{toggleMobile ? <Mobile /> : ""}
		</nav>
	);
};

export default Header;