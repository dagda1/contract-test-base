/* eslint-disable */
declare var module: any;

import React from 'react';
import ReactDOM from 'react-dom';
import { App, AppProps } from './containers/App';
import configureStore from './store';
import {history} from './routes/history'
import { initialHomeState } from './containers/Home/reducer';

const store = configureStore({home: initialHomeState},history)

const render = (Application: React.ComponentType<AppProps>, props: AppProps) => ReactDOM.render(<Application {...props} />, document.getElementById('root'));

render(App, {store});

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    
    try {
      const { App: NextApp } = require('./containers/App');
      
      render(NextApp, {store});
    } catch(err){
      console.error(err);

      const { App: NextApp } = require('./containers/App');
      
      render(NextApp, {store});
    }
  });
}
