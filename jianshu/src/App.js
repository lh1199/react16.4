import React from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js';
import { GlobalStyledIconfont } from './statics/iconfont/iconfont.js'

function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalStyledIconfont />
      <Header />
    </div>
  );
}

export default App;
