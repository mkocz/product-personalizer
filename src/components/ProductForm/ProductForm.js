import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const ProductForm = props => {
    const price = useMemo(() => props.basePrice + props.currentSize.additionalPrice, [props.currentSize, props.basePrice])

    return (
        <form>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
            <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
            <Button className={styles.button} onClick={event => {
                event.preventDefault();
                const product =
                    `Name: ${props.name}\n` +
                    `Price: ${price}$\n` +
                    `Size: ${props.currentSize.name}\n` +
                    `Color: ${props.currentColor}\n`;
                const summary = "SUMMARY\n======\n" + product
                console.log(summary)
            }}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>)
}

ProductForm.propTypes = {
    currentSize: PropTypes.object.isRequired,
    currentColor: PropTypes.string.isRequired,
};

export default ProductForm
