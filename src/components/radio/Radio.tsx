import React from 'react';
import styles from './styles.module.css';
import { RadioProps } from '../../types/types';

const Radio: React.FC<RadioProps> = ({ forId, name, label }) => {
  return (
    <div className={styles.radioContainer}>
      <input className={styles.radio} name={name} id={forId} type="radio" />
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
