import React from 'react';
import { Provider } from 'react-redux';
import Layout from './layouts/default';
import CheckBox from './containers/CheckBox';
import createStore from './store/index';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CheckBox />
      </Layout>
    </Provider>
  );
}

export default App;
