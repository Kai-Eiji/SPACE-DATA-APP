import React, {Component} from 'react';
import Apod from './Apod';
import Mars from './Mars';
import axios from 'axios';
import dateFnsFormat from 'date-fns/format';
import isWithinRange from 'date-fns/is_within_range'
import isEqual from 'date-fns/is_equal'
import subDays from 'date-fns/sub_days';
import isBefore from 'date-fns/is_before';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class PickDate extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            apodData:null,
            marsData: null,
            today: new Date(),
            apiKey : 'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug',     //'O2yIUsVQtXM3Xaz6pC0Vj5mEeOJX6EKaEAe7rCug'  'Xj7yCMxKSSaWL5j9KSjCMkCesdojZKdA9PC8N6G0'
            apodUrl : 'https://api.nasa.gov/planetary/apod?api_key=',
            marsUrl : 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?',
            date: null
        }
    }

    componentDidMount(){
  
        const adress = this.state.apodUrl + this.state.apiKey;
          
        axios.get(adress)
            .then( res => { this.setState({apodData: res.data}) } )
            .catch(error => { console.log(error); })


        const newDate = dateFnsFormat(this.state.today, 'YYYY-MM-DD')
        const dateReq = `&earth_date=${newDate}`
        const apiKey = `&api_key=${this.state.apiKey}`
        const marsAdress = this.state.marsUrl + dateReq + apiKey

        
        axios.get(marsAdress)
                .then( res => { this.setState({marsData: res.data, date:newDate}) } )
                .catch(error => { console.log(error); this.setState({marsData:null}) })
        }

    getYesterday = () =>{
        if( ! (this.state.marsData === null) && this.state.marsData.photos.length < 1){
            console.log('get yesterdat activated')
            const yesterday = subDays(this.state.today,1);
            const newDate = dateFnsFormat(yesterday, 'YYYY-MM-DD')
            const dateReq = `&earth_date=${newDate}`
            const apiKey = `&api_key=${this.state.apiKey}`
            const marsAdress = this.state.marsUrl + dateReq + apiKey

            
    
            axios.get(marsAdress)
                    .then( res => { this.setState({marsData: res.data , date:newDate}) } )
                    .catch(error => { console.log(error); this.setState({marsData:null}) })
        }
        
    }
    

    handleDateApod = (day) =>{
        console.log('handleApod')
        const newDate = dateFnsFormat(day, 'YYYY-MM-DD')
        const validRange = isWithinRange( day , new Date(1995, 5, 20), this.state.today );
        
        if(newDate !== 'Invalid Date' && validRange ){
            const adress = this.state.apodUrl + this.state.apiKey;
            const dateReq = `&date=${newDate}`
            
            axios.get(adress+dateReq)
                .then( res => { this.setState({apodData: res.data, date:newDate}) } )
                .catch(error => { console.log(error); this.setState({apodData:null}) })
        }

    }

    handleDateMars = (day) =>{
        
        const newDate = dateFnsFormat(day, 'YYYY-MM-DD')
        const dateReq = `&earth_date=${newDate}`
        const apiKey = `&api_key=${this.state.apiKey}`
        const adress = this.state.marsUrl + dateReq + apiKey

        if( isBefore(day, this.state.today) || isEqual(day, this.state.today) ){
            console.log('handleMars')
            axios.get(adress)
                .then( res => { this.setState({marsData: res.data, date:newDate}) } )
                .catch(error => { console.log(error); this.setState({marsData:null}) })
        }
        
    }

    render(){
        this.getYesterday();
        if(this.props.location.pathname === '/'){
                return (
                    <div>
                        <div className='mt-3 ml-4 calender'>
                            <p className='top-text'>Please enter a day:</p>
                            <div className="ml-5">
                                <DayPickerInput className='mt-5' onDayChange={ day => { this.handleDateApod(day);} }  />
                            </div>
                        </div>
                            <Apod  data={this.state.apodData}/>
                    </div>
                );
        }

        else if(this.props.location.pathname === '/Mars'){
            
            return (
                <div>
                    <div className='mt-3 ml-4 calender'>
                        <p className='top-text'>Please enter a day:</p>
                        <div className="ml-5">
                            <DayPickerInput className='mt-5' onDayChange={ day => { this.handleDateMars(day); } }  />
                        </div>
                    </div>
                        <Mars  data={this.state.marsData} date={this.state.date}/>
                </div>
            );
        }
    }

}

export default PickDate;