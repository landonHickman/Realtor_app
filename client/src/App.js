import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Realtor from './Realtor/Realtors';
import Main from './pages/Main';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/realtors' component={Realtor} />
    </Switch>
    </>
  );
}

export default App;
