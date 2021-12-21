import React from 'react';

import PhoneMask from 'components/PhoneMask';

// TODO: в стейте App хранить, задизейблен инпут или нет + сделать кнопку для переключения состояний
const App: React.FC = () => <PhoneMask disabled={false} />;

export default App;
