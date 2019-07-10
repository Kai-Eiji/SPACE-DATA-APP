import React, {Component} from 'react';

class Mars extends Component{

    render(){
        
        const body = document.querySelector('body');
        body.classList.add('mars')
        
        return(
            <h1>Hello from Mars</h1>
        )
    }
}

export default Mars;