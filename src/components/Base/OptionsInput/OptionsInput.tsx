import React, { useState } from 'react';
import Option from './Option/Option';

import styles from './OptionsInput.module.css';

export interface OptionsInputProps {
  value: string;
  onChange(value: string): void;
  error?: string;
}

const options = [
  { value: 'implementation', title: 'Implementation', icon: 'laptop-code' },
  { value: 'planning', title: 'Planning', icon: 'ruler-combined' },
  { value: 'optimization', title: 'Optimization', icon: 'feather' },
  { value: 'support', title: 'Technical Support', icon: 'headset' },
];

const OptionsInput: React.FC<OptionsInputProps> = ({ value, onChange, error }) => {
  const [activeValue, setActiveValue] = useState<string>(value);

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setActiveValue(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <fieldset className={styles.root}>
      <legend className={styles.label}>choose service</legend>
      <div className={styles.options}>
        {options.map((optionProps) => (
          <Option onChange={handleOnChange} {...optionProps} active={activeValue === optionProps.value} />
        ))}
        <Option onChange={handleOnChange} value="other" title="other" active={activeValue === 'other'} />
      </div>
      {error && <p className={styles.errMsg}>{error}</p>}
    </fieldset>
  );
};

export default OptionsInput;
