import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import SampleComponentContainer from './containers/SampleContainer'
import { configureStore } from './store/configureStore';
import initialState from './store/initialState'

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <SampleComponentContainer/>
    </Provider>,
  document.getElementById('root')
);
