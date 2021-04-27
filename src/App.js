import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './App.css';

import InformationTemp from './components/InformationTemp';
import ProtectedRoute from './components/ProtectedRoutes'

function App() {
  return (
    <Provider store={store}>
      <ProtectedRoute path={"/:userName"} component={InformationTemp} />
    </Provider>
  );
}
export default App;
