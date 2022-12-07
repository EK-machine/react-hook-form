import React from 'react';
import styles from './styles.module.css';
import { TextInputProps } from '../../types/types';

const Input: React.FC<TextInputProps> = ({ forId, name, placeholder, label, notice, error, register, validation }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
      <input
        {...register(name as 'username' | 'email' | 'password', validation)}
        type="text"
        className={styles.input}
        name={name}
        id={forId}
        placeholder={placeholder}
      />
      <p className={styles.notice}>{notice}</p>
      {error && error[name as 'username' | 'email' | 'password'] && (
        <p className={styles.error}>{error[name as 'username' | 'email' | 'password']?.message}</p>
      )}
    </div>
  );
};

export default Input;
