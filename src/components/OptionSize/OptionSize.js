import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size =>
                    <li key={size.name}>
                        <button type="button" className={clsx(size.name === props.currentSize.name && styles.active)} onClick={() => props.setCurrentSize(size)}>{size.name}</button></li>)}
            </ul>
        </div>
    )
}

OptionSize.propTypes = {
    currentSize: PropTypes.object.isRequired,
};

export default OptionSize
