import React from 'react'
import localImage from './images/space-man.jpg';


function Mars (props){
    console.log(props.data);


    const mainContent = () =>{

        const body = document.querySelector('body');
        body.classList.add('mars')

        if(props.data){
        
            const content = () =>{
                if(props.data.hdurl){
                    
                    return( <img src={props.data.hdurl} className='card-img-top' /> );
                }
                
                else if(props.data.url){
                    return(<div> 
                                <iframe title='video' className='mb-3'  src={props.data.url}></iframe>
                                <a className='video-link' href={props.data.url}>Link to this video</a>
                            </div>);
                }
                
                else{
                    return( <img src={localImage} className='card-img-top' /> );
                }
            }
            
            return(
                
                <div>
                    <div className='card-tittle text-center mb-3 mt-2'>
                        <h2>{props.data.title}</h2>
                    </div>
                    
                    {content()}
    
                    <div className='card-body'>
                        <div className='card-text'>
                            <p>{props.data.explanation}</p>
                        </div>
                    </div>
                </div> 
            )
        }
    
        else{
            return( <div>
                        <img className='card-img-top' src={localImage} />
                        <h3 className='error-message'>Data Not Available...</h3>
                    </div>
                );
        }

    }
    

    return(
        <div className='container'>
            <h1 className='text-center negative-margin mb-5 text-white'>MARS DATA</h1>
                <div className="card main mb-3 mt-3 polaroid ">

                    {mainContent()}
                    
                </div>
        </div>
    );
}

export default Mars;

