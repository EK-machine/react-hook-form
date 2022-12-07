export const inputs = [
  { forId: 'username', name: 'username', placeholder: 'Enter username', label: 'Username' },
  { forId: 'email', name: 'email', placeholder: 'Enter email', label: 'Email' },
  {
    forId: 'password',
    name: 'password',
    placeholder: 'Enter password',
    label: 'Password',
    notice: 'Your password is between 4 and 12 characters',
    error: 'aaaaaaaaa',
  },
];

export const radios = [
  { forId: 'name', name: 'name', label: 'Include username' },
  { forId: 'mail', name: 'mail', label: 'Include email' },
  { forId: 'pass', name: 'pass', label: 'Include password' },
  { forId: 'role', name: 'role', label: 'Include role' },
  { forId: 'all', name: 'all', label: 'Include all' },
];

export const selects = [{ value: 'User', selected: true }, { value: 'Admin' }];

export const validations = [
  {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Username shall be at least 3 characters long',
    },
    maxLength: {
      value: 15,
      message: 'Username shall be max 15 characters long',
    },
  },
  {
    required: 'Email is required',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter valid email',
    },
  },
  {
    required: 'Password is required',
    pattern: {
      value: /^[a-zA-Z0-9]{4,12}$/,
      message: 'Please enter valid password',
    },
    minLength: {
      message: 'Shall be min 4 characters long',
      value: 4,
    },
    maxLength: {
      value: 12,
      message: 'Shall be max 12 characters long',
    },
  },
];
