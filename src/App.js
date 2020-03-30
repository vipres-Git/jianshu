import React,{ Fragment } from 'react';
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Fragment>
       <Provider store={ store }>
        <Header/>
       </Provider>
    </Fragment>
  );
}

export default App;
