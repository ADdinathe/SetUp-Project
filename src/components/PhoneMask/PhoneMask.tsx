import * as React from 'react';

import { InputWrapper, MainForm, MainMask, StyledInput, StyledLabel } from './PhoneMask.styles';
import CustomSelect from './components/CustomSelect/Select';
import StatusBlock from './components/StatusBlock/StatusBlock';
import { COUNTRIES } from './config';
import { usePhoneMask } from './usePhoneMask';

type PhoneMaskProps = {
  disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({ disabled }: PhoneMaskProps) => {
  const { setCountryCode, inputStatus, values, handleKeyDown, valuesRef, onChange } =
    usePhoneMask();

  return (
    <MainForm>
      <StyledLabel>Введите номер телефона</StyledLabel>
      <MainMask>
        <CustomSelect disabled={disabled} onSelect={setCountryCode} status={inputStatus} />
        {values.map((val, index) => (
          <InputWrapper
            key={index}
            opening={index == 0}
            closing={index == 3}
            dash={index == 6 || index == 8}
          >
            <StyledInput
              status={inputStatus}
              disabled={disabled}
              value={val}
              data-index={index}
              tabIndex={index + COUNTRIES.length}
              ref={(el: HTMLInputElement) => {
                valuesRef.current[index] = el;
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
