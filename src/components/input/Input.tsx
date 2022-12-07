import React from 'react';
import styles from './styles.module.css';
import { TextInputProps } from '../../types/types';

const Input: React.FC<TextInputProps> = ({ forId, name, placeholder, label, notice, error }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
      <input type="text" className={styles.input} name={name} id={forId} placeholder={placeholder} />
      <p className={styles.notice}>{notice}</p>
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
