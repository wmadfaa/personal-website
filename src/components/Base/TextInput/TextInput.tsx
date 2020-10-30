import React, { forwardRef } from 'react';

import styles from './TextInput.module.css';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ id, label, error, ...inputProps }, ref) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input ref={ref} id={id} name={id} className={styles.input} {...inputProps} />
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
});

export default TextInput;
