import * as React from 'react';

import 'styles/styles.scss';

import { usePhoneMask } from '../../store/hook/usePhoneMask';

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

type PhoneMaskProps = {
  disabled: boolean;
};

const PhoneMask: React.FC<PhoneMaskProps> = ({ disabled }: PhoneMaskProps) => {
  const PhoneMaskFunc = usePhoneMask();
  return (
    <MainForm>
      <StyledLabel>Введите номер телефона</StyledLabel>
      <MainMask>
        <CustomSelect
          disabled={disabled}
          onSelect={PhoneMaskFunc.setCountryCode}
          status={PhoneMaskFunc.inputStatus}
        />
        {PhoneMaskFunc.values.map((v, i) => (
          <InputWrapper
            key={i}
            opening={i == 0}
            closing={i == 3}
            dash={i == 6 || i == 8}
          >
            <StyledInput
              status={PhoneMaskFunc.inputStatus}
              disabled={disabled}
              value={v}
              data-index={i}
              tabIndex={i + COUNTRIES.length}
              ref={(el: HTMLInputElement) => {
                PhoneMaskFunc.valuesRef.current[i] = el;
              }}
              onChange={PhoneMaskFunc.onChange}
              onKeyDown={PhoneMaskFunc.handleKeyDown}
            />
          </InputWrapper>
        ))}
      </MainMask>
      <StatusBlock status={PhoneMaskFunc.inputStatus} />
    </MainForm>
  );
};

export default React.memo(PhoneMask);
