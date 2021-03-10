import logo from './logo.svg';
import './App.css';
import SourcesCards from '../src/components/applictaionsCards/SourcesCards';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { useEffect } from 'react';
// import InformationTemp from './components/InformationTemp';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';
import Chart2 from './components/Chart2'

function App() {
  return (
    <>
      <Provider store={store}>

        <InformationTemp />
        <Chart2 />
        <SourcesCards />
      </Provider>
    </>
  );
}

export default App;
