import styled from 'styled-components';

import 'styles/styles.scss';
import errorIcon from './img/Vector-error.svg';
import successIcon from './img/Vector-succes.svg';
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
  color: rgba(0, 0, 0, 0.5);

  &::before {
    position: relative;
    top: 3px;
    left: 0;
    content: url(${errorIcon});
    padding-right: 0.5rem;
  }
`;

export const StyledSuccessBlock = styled.div`
  position: relative;
  margin-top: 0.6rem;
  margin-left: 5px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);

  &::before {
    position: relative;
    top: 3px;
    left: 0;
    content: url(${successIcon});
    padding-right: 0.5rem;
  }
`;
