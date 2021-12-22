import styled, { css } from 'styled-components';

import 'styles/styles.scss';
import { Status } from '../../../../types/types';

export const StyledSelectWrapper = styled.div`
  display: inline-block;
`;

export const StyledSelectedWrapper = styled.div<{
  status: Status;
  disabled: boolean;
}>`
  cursor: default;
  width: auto;
  padding: 0 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  border: 1px solid rgba(194, 201, 209, 1);
  border-radius: 8px;

  &:hover {
    border: 1px solid deepskyblue;
  }

  &:focus {
    border: 1px solid deepskyblue;
    outline: none;
  }

  ${({ disabled = false }) =>
    disabled &&
    css`
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.75),
          rgba(255, 255, 255, 0.75)
        ),
        #c2c9d1;
    `}
  ${({ status }) =>
    status === Status.success
      ? css`
          border: 1px solid #3cc13b;
        `
      : status === Status.error
      ? css`
          border: 1px solid #f03738;
        `
      : css`
          border: 1px solid rgba(194, 201, 209, 1);
        `}
}
`;

export const StyledSelected = styled.div`
  font-size: 14px;
  line-height: 20px;
  padding: 10px 7px;
  width: auto;
  height: 40px;
  overflow: hidden;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
  color: black;
`;

export const ListContainer = styled.ul`
  cursor: default;
  max-height: 20rem;
  width: 13rem;
  overflow-y: scroll;
  background: #ffffff;
  border-radius: 8px;
  overflow-x: hidden;
  list-style: none;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

  &::-webkit-scrollbar {
    width: 4px;
    height: 212px;
    background: #ffffff;
    border: 1px solid rgba(196, 196, 196, 0.2);
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    border: 1px solid rgba(196, 196, 196, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ListItem = styled.li`
  padding: 1rem;
  width: 300px;
  margin: 3% auto;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      rgba(62, 102, 251, 0.25);
  }
`;
