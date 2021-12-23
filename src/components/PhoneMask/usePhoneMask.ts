import * as React from 'react';

import { KeyCodes, Status } from 'types/types';
import { phoneCheck } from 'utils/validate';

export const usePhoneMask = () => {
  const [countryCode, setCountryCode] = React.useState(0);

  const [values, setValues] = React.useState(Array(10).fill(''));
  const valuesRef = React.useRef<HTMLInputElement[]>(Array(10));

  const [inputStatus, setInputStatus] = React.useState(Status.default);

  const shiftAndDash = React.useCallback(
    (index: number, dash: number) => {
      valuesRef.current[index + dash].focus();
      valuesRef.current[index + dash].select();
    },
    [valuesRef]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KeyCodes.Enter) {
      phoneCheck(
        values.join(''),
        () => setInputStatus(Status.success),
        () => setInputStatus(Status.error)
      );

      return;
    }

    const index = Number((event.target as HTMLInputElement).dataset?.index);

    switch (event.key) {
      case KeyCodes.ArrowLeft: {
        if (index > 0) {
          shiftAndDash(index, -1);
        }
        break;
      }

      case KeyCodes.ArrowRight: {
        if (index < 9) {
          shiftAndDash(index, 1);
        }
        break;
      }

      case KeyCodes.Backspace: {
        if (index > 0 && !values[index]) {
          shiftAndDash(index, -1);
        }
        break;
      }

      case KeyCodes.Delete: {
        if (index < 9) {
          shiftAndDash(index, 1);
        }
        break;
      }
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.dataset.index !== undefined) {
      const index = Number(event.target.dataset.index);
      const value = event.target.value;

      setValues((values) =>
        values.map((v, i) => (i === index ? value.slice(0, 1) : v))
      );

      if (index < 9 && value) {
        shiftAndDash(index, 1);
      }
    }
  };
  return {
    setCountryCode,
    inputStatus,
    values,
    handleKeyDown,
    valuesRef,
    onChange,
  };
};
