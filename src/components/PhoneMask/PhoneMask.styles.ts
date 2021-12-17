import styled, {css} from 'styled-components';
import './PhoneMask.css'

export const StyledInput = styled.input<{ error?: boolean, success?: boolean }>`
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
export const InputWrapper = styled.div<{opening?: boolean ,closing?: boolean ,dash?: boolean  }>`
  display: inline-block;
  ${({opening = false}) =>
          opening && css`
            margin-left: 10px;
            &::before {
              
              content: '(';
            }
          `}
  ${({closing = false}) =>
          closing && css`
            &::before {
              content: ') -';
            }
          `}
  ${({dash = false}) =>
          dash && css`
            &::before {
              content: '-';
            }
          `}

`;

export const StyledSelect = styled.select`
  //-webkit-appearance: none;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 8px;
  width: 77px;
  height: 40px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  background: #fff;
  //background: url("./Vector.png") no-repeat right / contain;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 212px;
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.2);
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    border: 1px solid rgba(196, 196, 196, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);

  }


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
  width: 209px;
  height: 32px;

  &:hover {
    box-shadow: 0 0 10px 100px blue inset;
    background: black;
    //background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), rgba(62, 102, 251, 0.25);
  }

  &:focus {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), rgba(62, 102, 251, 0.25);
  }
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