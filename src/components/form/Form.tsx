import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.css';
import Input from '../input/Input';
import Checkbox from '../checkbox/Checkbox';
import Radio from '../radio/Radio';
import Select from '../select/Select';
import { inputs, radios, options, validations } from '../../data/data';
import { FormFields, Report } from '../../types/types';
import { doSubmit } from '../../helpers/helpers';
import { setReport } from '../../redux/slices/reportSlice';

const Form: React.FC = () => {
  const dispatch = useDispatch();
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
    const report: Report = doSubmit(data);
    dispatch(setReport(report));
    !data.remember && reset();
  };

  return (
    <section className={styles.formSection}>
      <h1 className={styles.heading}>Fill the form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <select {...register('role')} className={styles.selectContainer} name="roleSelect">
          {options.map((e) => (
            <Select key={e.value} value={e.value} />
          ))}
        </select>
        <h2 className={styles.smallheading}>This information will be included to the final report</h2>
        <div className={styles.radiosContainer}>
          {radios.map((e) => (
            <Radio register={register} key={e.forId} forId={e.forId} name={e.name} label={e.label} />
          ))}
        </div>
        <input className={styles.btn} type="submit" />
      </form>
    </section>
  );
};

export default Form;
