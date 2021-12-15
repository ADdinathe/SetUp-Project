import React, { useState } from 'react';
import './PhoneMask.css';

type ButtonProps = {};
const countries = [
  '🇷🇺+7 Russia',
  '🇦🇫 +93 Афганистан',
  '🇦🇱 +355 Албания ',
  '🇦🇩 +213 Алжир ',
  '🇦🇸 +1684 Американское Самоа ',
  '🇦🇩 +376 Андорра',
];

const PhoneMask: React.FC<ButtonProps> = ({}) => {
  const [value1, setValue1] = useState<string>('🇷🇺+7');
  const [values, setValues] = React.useState(Array(10).fill(''));

  const handleChange1 = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue1(event.target.value);
    },
    []
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      console.log(value1 + values.join(''));
    }
    if (event.key === 'ArrowLeft') {
      // @ts-ignore
      if (undefined !== event.target.dataset.index) {
        // @ts-ignore
        const index = +event.target.dataset.index;
        if (index > 0) {
          inputRefs[index - 1].focus();
          inputRefs[index + 1].select();
        }
      }
    }
    if (event.key === 'ArrowRight') {
      // @ts-ignore
      if (undefined !== event.target.dataset.index) {
        // @ts-ignore
        const index = +event.target.dataset.index;
        if (index < values.length - 1) {
          inputRefs[index + 1].focus();
          inputRefs[index + 1].select();
        }
      }
    }
    if (event.key === 'Backspace') {
      // @ts-ignore
      if (undefined !== event.target.dataset.index) {
        // @ts-ignore
        const index = +event.target.dataset.index;
        if (index > 0) {
          setValues(values.map((n, i) => (i === index ? '' : n)));
          inputRefs[index - 1].focus();
          inputRefs[index - 1].select();
        }
      }
    }
  };
  const inputRefs: HTMLInputElement[] = [];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.index !== undefined) {
      const index = +event.target.dataset.index;
      const value = event.target.value;

      setValues(values.map((n, i) => (i === index ? value : n)));

      if (index < values.length - 1 && value) {
        inputRefs[index + 1].focus();
        inputRefs[index + 1].select();
      }
    }
  };

  return (
    <div className="MainForm">
      <label className="phone">Введите номер телефона</label>
      <div className="MainMask">
        <select
          className="num-select"
          value={value1}
          onChange={handleChange1}
          tabIndex={1}
        >
          {countries.map((i) => (
            <option key={i} className="option">
              {i}
            </option>
          ))}
        </select>
        {values.map((n, i) => (
          <input
            key={i}
            value={values[i]}
            className="num-input"
            type="number"
            data-index={i}
            onChange={onChange}
            ref={(input) => (inputRefs[i] = input as HTMLInputElement)}
            maxLength={1}
            tabIndex={i + 2}
            onKeyDown={handleKeyDown}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PhoneMask);
