import React from 'react'
import Gallery from 'react-grid-gallery';

function Mars (props){
      const date = props.date;
      let IMAGES = [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 250,
                thumbnailHeight: 174,
                isSelected: false,
                caption: "After Rain (Jeshu John - designerspics.com)"
              }]

    if(props.data){
        console.log(props.data)
        const photos = Array(...props.data.photos);
        const photoArray = photos.map( photo => {
        return(
                {
                  src: photo.img_src,
                  thumbnail: photo.img_src,
                  thumbnailWidth: 250,
                  thumbnailHeight: 174,
                  isSelected: false,
                  caption: `Taken by ${photo.rover.name} using ${photo.camera.full_name} on ${photo.earth_date}`
                }
              )
        })
        IMAGES = photoArray;   
    }
        
    document.getElementById('example-0')
    const body = document.querySelector('body');
    body.classList.add('mars')
    
    return (
      <div>
          <h1 className='text-center negative-margin mb-5 text-white'>MARS DATA {date}</h1>
          <Gallery images={IMAGES}/>
      </div>
    )
  }


export default Mars;

