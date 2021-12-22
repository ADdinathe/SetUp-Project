import * as React from 'react';

import PhoneMask from 'components/PhoneMask';

const App: React.FC = () => {
  const [disabled, setdisabled] = React.useState(false);
  return (
    <>
      <PhoneMask disabled={disabled} />
      <button onClick={() => setdisabled((visible) => !visible)}>
        {' '}
        Submit
      </button>
    </>
  );
};
export default App;
