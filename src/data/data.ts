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
