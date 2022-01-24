import * as React from 'react';

import {
  InputWrapper,
  MainForm,
  MainMask,
  StyledInput,
  StyledLabel,
} from './PhoneMask.styles';
import CustomSelect from './components/CustomSelect/Select';
import StatusBlock from './components/StatusBlock/StatusBlock';
import { COUNTRIES } from './config';
import { usePhoneMask } from './usePhoneMask';

type PhoneMaskProps = {
  disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({ disabled }: PhoneMaskProps) => {
  const {
    setCountryCode,
    inputStatus,
    values,
    handleKeyDown,
    valuesRef,
    onChange,
  } = usePhoneMask();

  return (
    <MainForm>
      <StyledLabel>Введите номер телефона</StyledLabel>
      <MainMask>
        <CustomSelect
          disabled={disabled}
          onSelect={setCountryCode}
          status={inputStatus}
        />
        {values.map((v, i) => (
          <InputWrapper
            key={i}
            opening={i == 0}
            closing={i == 3}
            dash={i == 6 || i == 8}
          >
            <StyledInput
              status={inputStatus}
              disabled={disabled}
              value={v}
              data-index={i}
              tabIndex={i + COUNTRIES.length}
              ref={(el: HTMLInputElement) => {
                valuesRef.current[i] = el;
              }}
              onChange={onChange}
              onKeyDown={handleKeyDown}
            />
          </InputWrapper>
        ))}
      </MainMask>
      <StatusBlock status={inputStatus} />
    </MainForm>
  );
};

export default React.memo(PhoneMask);
