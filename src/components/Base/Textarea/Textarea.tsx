import React, { forwardRef } from 'react';

import styles from './Textarea.module.css';

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ id, label, error, ...inputProps }, ref) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea ref={ref} id={id} name={id} className={styles.input} {...inputProps} />
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
});

export default Textarea;
