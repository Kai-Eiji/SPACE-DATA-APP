import React, {Component} from 'react';
import PickDate from './components/PickDate';
import Mars from './components/Mars';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component{

  constructor(props){
    const Background = './components/images/nasa2.jpg';
    super(props);
    this.state = {
      spaceBack: `url(${Background})`
    }
  }

  render(){

    return(
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          
            <Route exact path='/' component={PickDate} data={this.state}/>
            <Route path='/Mars'component={Mars} />
         

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
