import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import addToCartIcon from '../assets/icons/bt_add_to_cart.svg';
import addedToCartIcon from '../assets/icons/bt_added_to_cart.svg';
import ProductDetail from '../containers/ProductDetail';
import Image from 'next/image.js';
import styles from '../styles/ProductItem.module.scss';

const ProductItem = ( {product} ) => {
	const { addToCart } = useContext(AppContext);

	const [added, setAdded] = useState(true);

	const [toggleDetail, setToggleDetail] = useState(false);
	
	const handleClick = item => {addToCart(item), setAdded();};

	return (
		<div className={styles.ProductItem}>
			<Image loader = {() => product.images[0]} src= {product.images[0]} alt={product.title} width= {240} height= {240} onClick = {() => setToggleDetail(!toggleDetail)}/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					{added ? <Image src= {addToCartIcon} alt="" /> : <Image src = {addedToCartIcon} alt= "" />  }
				</figure>
			</div>
			{toggleDetail ? <ProductDetail product = {product} toggleDetail = {toggleDetail} setToggleDetail = {setToggleDetail}/> : ""}
		</div>
	);
};

export default ProductItem;
