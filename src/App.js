import { Provider } from 'react-redux';

import './App.css';
import store from './Redux/staticStore';
import InformationTemp from './components/InformationTemp';






function App() {
  return (
    <>
      <Provider store={store}>
      <ProtectedRoute path={"/admin/:userName"}
       user={TokenToString} component={Warp} />
        <InformationTemp />
      </Provider>
    </>
  );
}

export default App;
