import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import closeIcon from '../assets/icons/icon_close.png';
import Image from 'next/image.js';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = ( {product} ) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = item => {removeFromCart(item);};
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image loader= {()=> product?.images[0]} src={product?.images[0]} alt={product?.title} width={240} height={240} />
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image src= {closeIcon} alt="close" onClick = {() => handleRemove(product)}/>
		</div>
	);
};

export default OrderItem;
