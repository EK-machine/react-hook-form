import React from 'react';
import styles from './styles.module.css';
import { SelectProps } from '../../types/types';

const Select: React.FC<SelectProps> = ({ selected, value }) => {
  return (
    <option className={styles.select} selected={selected}>
      {value}
    </option>
  );
};

export default Select;
