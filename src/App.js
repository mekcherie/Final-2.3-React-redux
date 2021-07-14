import Home from './Home';
import StarWars from './StarWars';
import './Display.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import reducers from "./reducers";

const store = createStore(applyMiddleware(thunk))

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Home />
      <StarWars />
    </div>
    </Provider>
  );
}

export default App;
