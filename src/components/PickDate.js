import React, {Component} from 'react';
import Apod from './Apod';
import Mars from './Mars';
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
        
        this.state = {
            apodData:null,
            marsData: null,
            today: new Date(),
            apiKey : 'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug',     //'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug'  'Xj7yCMxKSSaWL5j9KSjCMkCesdojZKdA9PC8N6G0'
            apodUrl : 'https://api.nasa.gov/planetary/apod?api_key=',
            marsUrl : 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
        }
    }

    componentDidMount(){
  
        const adress = this.state.apodUrl + this.state.apiKey;
          
        axios.get(adress)
            .then( res => { this.setState({apodData: res.data}) } )
            .catch(error => { console.log(error); })
        }
    

    handleDateApod = (day) =>{
       
        const newDate = dateFnsFormat(day, 'YYYY-MM-DD')
        const validRange = isWithinRange( day , new Date(1995, 5, 20), this.state.today );
        console.log(this.state.today);
        
        if(newDate !== 'Invalid Date' && validRange ){
            const adress = this.state.apodUrl + this.state.apiKey;
            const dateReq = `&date=${newDate}`
            
            axios.get(adress+dateReq)
                .then( res => { this.setState({apodData: res.data}) } )
                .catch(error => { console.log(error); this.setState({apodData:null}) })
        }

    }

//earth_date=2015-6-3&api_key=DEMO_KEY'

    handleDateMars = (day) =>{
       
        const newDate = dateFnsFormat(day, 'YYYY-MM-DD')
        const dateReq = `&earth_date=${newDate}`
        const apiKey = `&api_key=${this.state.apiKey}`
        
        const adress = this.state.marsUrl + dateReq + apiKey

            axios.get(adress)
                .then( res => { this.setState({marsData: res.data}) } )
                .catch(error => { console.log(error); this.setState({marsData:null}) })
        
    }




    render(){
        console.log(this.state.apodData);
        

        if(this.props.location.pathname === '/'){
            console.log('path name = /')
                return (
                    <div>
                        <div className='mt-3 ml-4 calender'>
                            <p className='top-text'>Please enter a day:</p>
                            <div className="ml-5">
                                <DayPickerInput className='mt-5' onDayChange={ day => { this.handleDateApod(day); } }  />
                            </div>
                        </div>
                            <Apod  data={this.state.apodData}/>
                    </div>
                );
        }

        else if(this.props.location.pathname === '/Mars'){
            console.log('path name = /Mars')
            return (
                <div>
                    <div className='mt-3 ml-4 calender'>
                        <p className='top-text'>Please enter a day:</p>
                        <div className="ml-5">
                            <DayPickerInput className='mt-5' onDayChange={ day => { this.handleDateMars(day); } }  />
                        </div>
                    </div>
                        <Mars  data={this.state.marsData}/>
                </div>
            );
        }
    }

}

export default PickDate;