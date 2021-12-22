import * as React from 'react';

import { Status } from 'types/types';

import { COUNTRIES } from '../../config';

import 'styles/styles.scss';

import {
  StyledSelectWrapper,
  StyledSelectedWrapper,
  StyledSelected,
  DropDownListContainer,
  ListContainer,
  ListItem,
} from './Select.styles';
import Star from './img/Vector_.svg';

type CustomSelectProps = {
  disabled: boolean;
  status: Status;
  onSelect: (country: number) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  disabled,
  onSelect,
  status,
}: CustomSelectProps) => {
  const [countryCode, setCountryCode] = React.useState(
    COUNTRIES[0].flag + ' ' + COUNTRIES[0].code
  );

  const [visible, setvisible] = React.useState(false);

  const toggling = () => {
    setvisible(false);
  };

  React.useEffect(() => {}, [visible]);
  React.useEffect(() => {
    if (visible) {
      window.addEventListener('click', toggling);
    }
    return () => {
      window.removeEventListener('click', toggling);
    };
  }, [visible]);

  return (
    <StyledSelectWrapper>
      <StyledSelectedWrapper
        disabled={disabled}
        tabIndex={1}
        onClick={() => setvisible((visible) => !visible)}
        status={status}
      >
        <StyledSelected>{countryCode}</StyledSelected>
        <Star />
      </StyledSelectedWrapper>

      {visible && (
        <DropDownListContainer>
          <ListContainer>
            {COUNTRIES.map((i, index) => (
              <ListItem
                tabIndex={index + 1}
                key={index}
                onClick={() => {
                  setCountryCode(i.flag + ' ' + i.code);
                  onSelect(index);
                  setvisible(false);
                }}
              >
                {i.flag + ' ' + i.code + ' ' + i.country}
              </ListItem>
            ))}
          </ListContainer>
        </DropDownListContainer>
      )}
    </StyledSelectWrapper>
  );
};

export default React.memo(CustomSelect);
