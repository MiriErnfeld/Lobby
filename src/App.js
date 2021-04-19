import { Provider } from 'react-redux';

import './App.css';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';
// import FavIcon from './components/Icon';





function App() {
  return (
    <>
      <Provider store={store}>
        {/* <FavIcon></FavIcon> */}
        <InformationTemp />

      </Provider>
    </>
  );
}

export default App;
