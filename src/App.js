import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore';
import Information from './components/InformationTemp';
import Favicon from 'react-favicon'


import './App.css';


function App() {
  return (
    <Provider store={store}>
      {/* <ProtectedRoute component={Information} /> */}
      {/* <ProtectedRoute path={"/:userName"} component={Information} /> */}
      <Information></Information>

      <Favicon url={require('../src/img/leader.png')} />
      {
        console.log("iconnnnnnnnnnnn"+'../src/img/leader.png')}
    </Provider>
  );
}
export default App;
