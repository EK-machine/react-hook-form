import React from 'react';
import { InputProps, InpustNames } from '../../types/types';
import styles from './styles.module.css';

const Input: React.FC<InputProps> = ({ onChange, forId, name, placeholder, label, notice, error, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className={styles.input}
        name={name}
        id={forId}
        placeholder={placeholder}
      />
      <p className={styles.notice}>{notice}</p>
      {error && error[name as InpustNames] && <p className={styles.error}>{error[name as InpustNames]?.message}</p>}
    </div>
  );
};

export default Input;
