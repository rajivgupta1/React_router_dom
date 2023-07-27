import './App.css';
import About from './Componetnts/About';
import Conatct from './Componetnts/Conatct';
import { Route } from "react-router-dom";
import Error from './Componetnts/Error';

import {Switch} from 'react-router-dom';

const App =() => {
  return (
    <>

      <Switch>
      
        <Route path="/About"  component={About}/>
        <Route path="/Conatct"  component={Conatct}/>
        <Route component={Error} />

      </Switch>
      {/* <About/>
      <Conatct/> */}
    </>
  )
}

export default App;
