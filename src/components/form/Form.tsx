import React from 'react';
import styles from './styles.module.css';

const Form:React.FC = () => {
    console.log('form is here');
    return (
        <form className={styles.form}>
            form is here
        </form>
    )
}

export default Form;