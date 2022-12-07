import React from 'react';
import styles from './styles.module.css';

const Checkbox: React.FC = () => {
  return (
    <div className={styles.checkboxContainer}>
      <input className={styles.checkbox} id="remember" type="checkbox" name="remember" />
      <label className={styles.label} htmlFor="remember">
        Remember me
      </label>
    </div>
  );
};

export default Checkbox;
