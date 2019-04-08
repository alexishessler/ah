import React from 'react';
import App from './_App';

// Styles
import './App.css';

// Redux & React Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

// Reducers
import language from './Reducers/Language.reducer';
import theme from './Reducers/Theme.reducer';
const globalReducers = combineReducers({
  language, theme
})

// Redux Store creation
const store = createStore(globalReducers);

const Initialize = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <App/>
      </div>
    </Provider>
  );
};

export default Initialize;
