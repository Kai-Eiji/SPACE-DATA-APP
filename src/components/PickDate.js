import React, {Component} from 'react';
import Apod from '../components/Apod';
import axios from 'axios';
import dateFnsFormat from 'date-fns/format';
import isWithinRange from 'date-fns/is_within_range'
import isBefore from 'date-fns/is_before';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class PickDate extends Component{

    constructor(props){
        super(props);
        console.log(props);
        const Background = './images/nasa2.jpg';
        this.state = {
            apodData:null,
            defaultData:null,
            today: new Date(),
            backgroundImage: `url(${Background})`
        }
    }

    componentDidMount(){
  
        const apiKey = 'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug';     //'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug'  'Xj7yCMxKSSaWL5j9KSjCMkCesdojZKdA9PC8N6G0'
        const url = "https://api.nasa.gov/planetary/apod?api_key=";
        const adress = url + apiKey;
          
        axios.get(adress)
            .then( res => { this.setState({apodData: res.data}) } )
            .catch(error => { console.log(error); })
        }
    

    handleDate = (day) =>{
       
        const newDate = dateFnsFormat(day, 'YYYY-MM-DD')
        const validRange = isWithinRange( day , new Date(1995, 5, 20), this.state.today );
        
        if(newDate !== 'Invalid Date' && validRange){
            const apiKey = 'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug';     //'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug'  'Xj7yCMxKSSaWL5j9KSjCMkCesdojZKdA9PC8N6G0'
            const url = "https://api.nasa.gov/planetary/apod?api_key=";
            const adress = url + apiKey;
            const dateReq = `&date=${newDate}`
            
            axios.get(adress+dateReq)
                .then( res => { this.setState({apodData: res.data}) } )
                .catch(error => { console.log(error); this.setState({apodData:null}) })
            
            
        }

    }

    render(){
        console.log(this.state.apodData);
        
        document.body.style = this.state.backgroundImage;

        return (
            <div>
                <div className='mt-3 ml-4 calender'>
                    <p className='top-text'>Please enter a day:</p>
                    <div className="ml-5">
                        <DayPickerInput className='mt-5' onDayChange={ day => { this.handleDate(day); } }  />
                    </div>
                    
                </div>
                
                    <Apod  data={this.state.apodData}/>
            </div>
        );
    }

}

export default PickDate;