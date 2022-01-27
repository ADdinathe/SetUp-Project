import styled, { css } from 'styled-components';

import colors from 'styles/colors';
import { Status } from 'types/types';

export const StyledInput = styled.input.attrs({ type: 'number' })<{
  status: Status;
}>`
  -moz-appearance: textfield;
  font-size: 14px;
  line-height: 20px;
  width: 32px;
  height: 40px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${colors.defaultColor};

  &:hover {
    border: 1px solid ${colors.inputHove_Focus};
  }

  &:focus {
    -moz-appearance: textfield;
    border: 1px solid ${colors.inputHove_Focus};
    outline: none;
  }

  &:disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #c2c9d1;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  ${({ status }) =>
    status === Status.success
      ? css`
          border: 1px solid ${colors.successColor};
        `
      : status === Status.error
      ? css`
          border: 1px solid ${colors.errorColor};
        `
      : css`
          border: 1px solid ${colors.defaultColor};
        `}
`;

export const InputWrapper = styled.div<{
  opening?: boolean;
  closing?: boolean;
  dash?: boolean;
}>`
  display: inline-block;
  ${({ opening = false }) =>
    opening &&
    css`
      margin-left: 10px;

      &::before {
        content: '(';
      }
    `}
  ${({ closing = false }) =>
    closing &&
    css`
      &::before {
        content: ') -';
      }
    `}
  ${({ dash = false }) =>
    dash &&
    css`
      &::before {
        content: '-';
      }
    `}
`;

export const MainForm = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
`;
export const MainMask = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  //color: rgba(0, 0, 0, 0.5);
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
