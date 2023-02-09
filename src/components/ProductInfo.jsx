import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';
import Image from 'next/image.js';
import styles from '../styles/ProductInfo.module.scss';


const ProductInfo = ( {product} ) => {

	const { addToCart } = useContext(AppContext);

	const handleClicks = item => {addToCart(item);};

	return (
		<>
			<Image src={product.images[0]} width={240} height={240} alt={product.title} />
			<div className={styles.ProductInfo}>
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className= {`${styles['primary-button']} ${styles['add-to-cart-button']}`} onClick = {() => handleClicks(product)}>
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;
