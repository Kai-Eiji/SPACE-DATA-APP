import React, {Component} from 'react';
import PickDate from './components/PickDate';
import Mars from './components/Mars';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component{

  render(){

    return(
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          
            <Route path='/' component={PickDate}/>
            {/* <Route path='/Mars'component={Mars} /> */}
         

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
