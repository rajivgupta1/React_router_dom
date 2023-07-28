import './App.css';
import About from './Componetnts/About';
import Conatct from './Componetnts/Conatct';
import { Route } from "react-router-dom";
import Error from './Componetnts/Error';

import {Switch} from 'react-router-dom';
import { Menu } from '@material-ui/icons';

const App =() => {
  return (
    <>
    <Menu />
      <Switch>
      
        <Route exact path="/about"  component={About}/>
        <Route exact path="/conatct"  component={Conatct}/>
        <Route component={Error} />

      </Switch>


      {/* <About/>
      <Conatct/> */}
    </>
  )
}

export default App;
