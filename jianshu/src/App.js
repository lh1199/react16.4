import React from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js';
import { GlobalStyledIconfont } from './statics/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalStyledIconfont />
      <Header />
    </Provider>
  );
}

export default App;
