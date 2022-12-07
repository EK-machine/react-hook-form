import React from 'react';
import styles from './styles.module.css';
import Input from '../input/Input';
import Checkbox from '../checkbox/Checkbox';
import Radio from '../radio/Radio';
import Select from '../select/Select';
import { inputs, radios, selects } from '../../data/data';

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      {inputs.map((e) => (
        <Input
          key={e.forId}
          forId={e.forId}
          name={e.name}
          label={e.label}
          placeholder={e.placeholder}
          notice={e.notice}
          error={e.error}
        />
      ))}
      <Checkbox />
      <select className={styles.selectContainer} name="roleSelect">
        {selects.map((e) => (
          <Select key={e.value} value={e.value} selected={e.selected} />
        ))}
      </select>
      <div className={styles.radiosContainer}>
        {radios.map((e) => (
          <Radio key={e.forId} forId={e.forId} name={e.name} label={e.label} />
        ))}
      </div>
      <input className={styles.btn} type="submit" />
    </form>
  );
};

export default Form;
