import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Container from './container';
import coordinateReducer from './store/reducer';

const rootReducer = combineReducers({
  coordinate: coordinateReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'blair': require('./assets/fonts/openfont.ttf'),
  });
};


export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => {
        setFontloaded(true);
      }}
        onError={(err) => {
          console.log(err);
        }} />
    )
  }

  return (
    <Provider store={store}>
        <Container />
    </Provider>
  );
}
