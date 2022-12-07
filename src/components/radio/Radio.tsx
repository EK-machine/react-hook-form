import React from 'react';
import styles from './styles.module.css';
import { RadioProps } from '../../types/types';

const Radio: React.FC<RadioProps> = ({ forId, name, label, register }) => {
  return (
    <div className={styles.radioContainer}>
      <input
        {...register(name as 'incName' | 'incMail' | 'incPass' | 'incRole' | 'incAll')}
        className={styles.radio}
        name={name}
        id={forId}
        type="radio"
      />
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
