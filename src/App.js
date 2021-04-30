import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore';
import Information from './components/InformationTemp';
import ProtectedRoute from './components/ProtectedRoutes'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './App.css';


function App() {
  return (
    <Provider store={store}>
      {/* <ProtectedRoute path={"/:userName"} component={Information} /> */}
      <Information></Information>
    </Provider>
  );
}
export default App;
