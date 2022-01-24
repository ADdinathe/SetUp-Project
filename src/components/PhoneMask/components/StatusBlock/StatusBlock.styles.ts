import styled from 'styled-components';

import colors from 'styles/colors';

import errorIcon from './img/error.svg';
import successIcon from './img/succes.svg';

export const ErrorPic = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

export const StyledErrorBlock = styled.div`
  margin-top: 0.6rem;
  margin-left: 5px;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.halfVisible};

  &::before {
    background: url(${errorIcon}) no-repeat;
    content: '';
    padding-right: 1.3rem;
  }
`;

export const StyledSuccessBlock = styled.div`
  position: relative;
  margin-top: 0.6rem;
  margin-left: 5px;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.halfVisible};

  &::before {
    background: url(${successIcon}) no-repeat;
    content: '';
    padding-right: 1.3rem;
  }
`;
