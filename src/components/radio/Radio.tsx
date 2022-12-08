import React from 'react';
import styles from './styles.module.css';
import { RadioProps } from '../../types/types';

const Radio: React.FC<RadioProps> = ({ forId, name, label, register }) => {
  return (
    <div className={styles.radioContainer}>
      <input
        {...register('include')}
        className={styles.radio}
        id={forId}
        type="radio"
        value={name}
        defaultChecked={name === 'all'}
      />
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
