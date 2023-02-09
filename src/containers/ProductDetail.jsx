import React from 'react';
import ProductInfo from '../components/ProductInfo';
import styles from '../styles/ProductDetail.module.scss';


const ProductDetail = ({product, toggleDetail, setToggleDetail}) => {

	return (
		<aside className={styles.ProductDetail}>
			<div className={`${styles['ProductDetail-close']}`} onClick = {() => setToggleDetail(!toggleDetail)} >
				<p>✖</p>
			</div>
			<ProductInfo product = {product}/>
		</aside>
	);
};

export default ProductDetail;
