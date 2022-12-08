import { SubmitHandler } from 'react-hook-form';
import { FormFields } from '../types/types';

export const doSubmit: SubmitHandler<FormFields> = (data) => {
  const included = data.include;
  if (included === 'all') {
    return {
      email: data.email,
      password: data.password,
      remember: data.remember,
      role: data.role,
      username: data.username,
    };
  }
  if (included === 'name') {
    return {
      remember: data.remember,
      username: data.username,
    };
  }
  if (included === 'mail') {
    return {
      remember: data.remember,
      email: data.email,
    };
  }
  if (included === 'password') {
    return {
      password: data.password,
      remember: data.remember,
    };
  }
  if (included === 'role') {
    return {
      remember: data.remember,
      role: data.role,
    };
  }
};
