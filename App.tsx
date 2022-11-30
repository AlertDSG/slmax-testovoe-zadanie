import React from 'react';
import {Provider} from 'react-redux';
import {Body} from './src/components/Body';
import {store} from './src/bll/store';

const App = () => {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
};

export default App;
