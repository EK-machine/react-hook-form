import React from 'react';
import styles from './styles.module.css';
import Input from '../input/Input';
import Checkbox from '../checkbox/Checkbox';
import Radio from '../radio/Radio';
import Select from '../select/Select';
import { inputs, radios, selects, validations } from '../../data/data';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../../types/types';

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      email: 'test@test.com',
    },
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((e, i) => (
        <Input
          register={register}
          key={e.forId}
          forId={e.forId}
          name={e.name}
          label={e.label}
          placeholder={e.placeholder}
          notice={e.notice}
          validation={validations[i]}
          error={errors}
        />
      ))}
      <Checkbox register={register} />
      <select className={styles.selectContainer} name="roleSelect">
        {selects.map((e) => (
          <Select key={e.value} value={e.value} selected={e.selected} />
        ))}
      </select>
      <div className={styles.radiosContainer}>
        {radios.map((e) => (
          <Radio register={register} key={e.forId} forId={e.forId} name={e.name} label={e.label} />
        ))}
      </div>
      <input className={styles.btn} type="submit" />
    </form>
  );
};

export default Form;
