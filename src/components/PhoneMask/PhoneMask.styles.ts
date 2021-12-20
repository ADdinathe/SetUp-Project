import styled, {css} from 'styled-components';
import 'styles/App.scss';

export const StyledInput = styled.input<{ error?: boolean; success?: boolean }>`
  -moz-appearance: textfield;
  font-size: 14px;
  line-height: 20px;
  width: 32px;
  height: 40px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  padding: 10px 8px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid gray;

  &:hover {
    border: 1px solid deepskyblue;
  }

  &:focus {
    -moz-appearance: textfield;
    border: 1px solid deepskyblue;
    outline: none;
  }

  &:disabled {
    background: linear-gradient(0deg,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.75)),
    #c2c9d1;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  ${({error = false}) =>
          error &&
          css`
            border: 1px solid #f03738;
          `}
  
  ${({success = false}) =>
          success &&
          css`
            border: 1px solid #3cc13b;
          `}
`;
export const InputWrapper = styled.div<{
    opening?: boolean;
    closing?: boolean;
    dash?: boolean;
}>`
  display: inline-block;
  ${({opening = false}) =>
          opening &&
          css`
            margin-left: 10px;

            &::before {
              content: '(';
            }
          `}
  ${({closing = false}) =>
          closing &&
          css`
            &::before {
              content: ') -';
            }
          `}
  ${({dash = false}) =>
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


