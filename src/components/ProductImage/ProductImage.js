import styles from './ProductImage.module.scss';

import PropTypes from 'prop-types';


const ProductImage = props => {
    const srcTitle = props.title.split(' ').reverse().join('-').toLowerCase();

    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={props.title}
                src={`${process.env.PUBLIC_URL}/images/products/${srcTitle}--${props.currentColor}.jpg`} />
        </div>
    )
}

ProductImage.propTypes = {
    currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
