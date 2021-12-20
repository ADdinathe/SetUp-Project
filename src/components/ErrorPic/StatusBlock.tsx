import React from 'react';
import 'styles/App.scss';

import {Status} from 'utils/meta';
import styled from "styled-components";

const ErrorPic = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;
const StyledErrorBlock = styled.div`
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
const StyledSuccessBlock = styled.div`
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
type StatusBlockProps = {
    style: string
};

const StatusBlock: React.FC<StatusBlockProps> = ({style}) => {
    if (style === Status.success){

        return (<ErrorPic>
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.00001 0.333313C3.32001 0.333313 0.333344 3.31998 0.333344 6.99998C0.333344 10.68 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00001 0.333313ZM5.66668 10.3333L2.33334 6.99998L3.27334 6.05998L5.66668 8.44665L10.7267 3.38665L11.6667 4.33331L5.66668 10.3333Z"
                    fill="#3CC13B"
                />
            </svg>
            <StyledSuccessBlock>Номер телефона введен верно</StyledSuccessBlock>
        </ErrorPic>)
    } else if (style === Status.error){
        return (<ErrorPic>
            <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.666656 13H15.3333L7.99999 0.333313L0.666656 13ZM8.66666 11H7.33332V9.66665H8.66666V11ZM8.66666 8.33331H7.33332V5.66665H8.66666V8.33331Z"
                    fill="#F03738"
                />
            </svg>
            <StyledErrorBlock>Неправильный номер телефона</StyledErrorBlock>
        </ErrorPic>)
    }
    return null;
}


export default React.memo(StatusBlock);
