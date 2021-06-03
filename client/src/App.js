import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Realtor from './Realtor/Realtors';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/realtors' component={Realtor} />
    </Switch>
    </>
  );
}

export default App;
