import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '../styles/MyOrder.module.scss';

import flechita from '../assets/icons/flechita.svg';		

const MyOrder = ({toggleOrders, setToggleOrders}) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
	
	return (
		<aside className= {styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src= {flechita} alt="arrow" onClick = {() => {setToggleOrders(!toggleOrders);}} />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (<OrderItem product = {product} key = {`orderItem-${product.id}`} />))}
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
					<Link href="/checkout">
						<button className= {styles['primary-button']}> Checkout </button>
					</Link>
			</div>

		</aside>
	);
};

export default MyOrder;