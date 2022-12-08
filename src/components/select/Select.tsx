import React from 'react';
import styles from './styles.module.css';
import { SelectProps } from '../../types/types';

const Select: React.FC<SelectProps> = ({ value }) => {
  return (
    <option className={styles.select} value={value}>
      {value}
    </option>
  );
};

export default Select;
