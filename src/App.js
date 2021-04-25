import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'

import './App.css';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';
import ProtectedRoute from './components/ProtectedRoutes'






function App() {
  const Data = useSelector(state => state.staticDetailsReducer)
  const TokenToString = Data.jwt
  return (
    <>
      <Provider store={store}>
        <ProtectedRoute user={TokenToString} component={InformationTemp} />
      </Provider>
    </>
  );
}

export default App;
