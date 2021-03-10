import { Provider } from 'react-redux';

import './App.css';
import SourcesCards from '../src/components/applictaionsCards/SourcesCards';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';


function App() {
  return (
    <>
      <Provider store={store}>
        <InformationTemp />
 
        <SourcesCards />
      </Provider>
    </>
  );
}

export default App;
