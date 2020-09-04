import React from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js';
import { GlobalStyledIconfont } from './statics/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalStyledIconfont />
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
