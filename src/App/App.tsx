import * as React from 'react';
import 'styles/styles.scss';
import styled from 'styled-components';

import PhoneMask from 'components/PhoneMask';

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  color: #555555;
  width: 120px;
  font-size: 14px;
  height: 2.5rem;
  margin: 0.5rem 0 0 26rem;

  &:hover,
  &:focus {
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;

const App: React.FC = () => {
  const [disabled, setDisabled] = React.useState(false);
  return (
    <>
      <PhoneMask disabled={disabled} />
      <StyledButton onClick={() => setDisabled((visible) => !visible)}>
        Submit
      </StyledButton>
    </>
  );
};

export default App;
