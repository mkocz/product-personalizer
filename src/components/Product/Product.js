import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0])
  const [currentColor, setCurrentColor] = useState(props.colors[0])

  const getPrice = () => props.basePrice + currentSize.additionalPrice;

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          name={props.name}
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          basePrice={props.basePrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default Product;
