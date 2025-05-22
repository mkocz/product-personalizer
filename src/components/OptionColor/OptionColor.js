import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (<div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>{props.colors.map(color =>
            <li key={color}><button type="button" className={clsx(
                styles[`color${capitalize(color)}`], color === props.currentColor && styles.active)} onClick={() => {
                    props.setCurrentColor(color)
                }}></button></li>)}
        </ul>
    </div>
    )
}

OptionColor.propTypes = {
    currentColor: PropTypes.string.isRequired,
};

export default OptionColor
