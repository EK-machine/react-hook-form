import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

export interface PatternValidation {
  value: RegExp;
  message: string;
}

export interface MinLengthValidation {
  message: string;
  value: number;
}

export interface MaxLengthValidation {
  message: string;
  value: number;
}

export interface Validations {
  required: string;
  pattern?: PatternValidation;
  minLength?: MinLengthValidation;
  maxLength?: MaxLengthValidation;
}

export interface TextInputProps {
  forId: string;
  name: string;
  placeholder: string;
  label: string;
  notice?: string;
  error: Partial<FieldErrorsImpl<{ username: string; email: string; password: string }>>;
  register: UseFormRegister<FormFields>;
  validation: Validations;
}

export interface CheckboxProps {
  register: UseFormRegister<FormFields>;
}

export interface RadioProps {
  forId: string;
  name: string;
  label: string;
  register: UseFormRegister<FormFields>;
}

export interface SelectProps {
  value: string;
}

export interface FormFields {
  username: string;
  email: string;
  role: string;
  password: string;
  remember: boolean;
  include: 'all' | 'name' | 'mail' | 'password' | 'role';
}

export interface Report {
  email?: string;
  password?: string;
  remember: boolean;
  role?: string;
  username?: string;
}

export interface State {
  report: Report | null;
}

export interface ReportProps {
  report: Report;
}
