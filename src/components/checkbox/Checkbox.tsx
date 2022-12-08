import React from 'react';
import { CheckboxProps } from '../../types/types';
import styles from './styles.module.css';

const Checkbox: React.FC<CheckboxProps> = ({ register }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input {...register('remember')} className={styles.checkbox} id="remember" type="checkbox" name="remember" />
      <label className={styles.label} htmlFor="remember">
        Remember me
      </label>
    </div>
  );
};

export default Checkbox;
