import styled, {css} from 'styled-components';
import './PhoneMask.css'


export const StyledInput = styled.input<{ error?: boolean , success?: boolean}>`
  -moz-appearance: textfield;
  font-size: 14px;
  line-height: 20px;
  width: 32px;
  height: 40px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  padding: 10px 8px;
  background: #FFFFFF;
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
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #C2C9D1;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
  ${({error = false}) =>
          error &&
          css`
            -moz-appearance: textfield;
            font-size: 14px;
            line-height: 20px;
            width: 32px;
            height: 40px;
            position: relative;
            margin: 5px;
            overflow: hidden;
            padding: 10px 8px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #F03738;
            &::-webkit-inner-spin-button {
              display: none;
            }
          `}
  ${({success = false}) =>
          success &&
          css`
            -moz-appearance: textfield;
            font-size: 14px;
            line-height: 20px;
            width: 32px;
            height: 40px;
            position: relative;
            margin: 5px;
            overflow: hidden;
            padding: 10px 8px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #3CC13B;
            &::-webkit-inner-spin-button {
              display: none;
            }
          `}

`;

export const StyledSelect = styled.select`
  font-size: 14px;
  line-height: 20px;
  padding: 10px 8px;
  width: 77px;
  height: 40px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  background: #FFFFFF;
  border-radius: 8px;

  &:hover {
    border: 1px solid deepskyblue;
  }
  &:focus {
    border: 1px solid deepskyblue;
    outline: none;
  }
  &:disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #C2C9D1;
  }

`;
export const StyledOption = styled.option`
  font-size: 12px;
  line-height: 20px;
`;

export const MainForm = styled.div`
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
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
export const StyledErrorBlock = styled.div`
  margin-top: 0.6rem;
  margin-left: 5px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);

  //&::before {
  //  content: " ";
  //  background-image: url("./Vector-error.svg");
  //  height: 15px;
  //  width: 13px;
  //  padding-right: 0.5rem;
  //}
`;
export const StyledSuccessBlock = styled.div`
  margin-top: 0.6rem;
  margin-left: 5px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);

  //&::before {
  //  content: url("./Vector-succes.svg");
  //  padding-right: 0.5rem;
  //}

`;
export const ErrorPic = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;

`;