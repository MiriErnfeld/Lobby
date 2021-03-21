import { Provider } from 'react-redux';

import './App.css';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';
import Chart from './components/Chart'


function App() {
  return (
    <>
      <Provider store={store}>
        <InformationTemp />
   
      </Provider>
    </>
  );
}

export default App;
