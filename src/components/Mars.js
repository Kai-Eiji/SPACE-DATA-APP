import React from 'react'
import Gallery from 'react-grid-gallery';


function Mars (props){
  
      let IMAGES = [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
              }]
    
  

  
    console.log(props.data);

    if(props.data){
        const photos = Array(...props.data.photos);
        console.log(photos);
        console.log(photos[0]);
        console.log(photos[0].img_src);


        
          IMAGES = [{
                    src: `${props.data.photos[0].img_src}`,
                    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                    isSelected: true,
                    caption: "After Rain (Jeshu John - designerspics.com)"
                  }]
        
          
        }
        
        
        document.getElementById('example-0')

  

  

  

  
    
    return (
      <div>
          <Gallery images={IMAGES}/>
      </div>
    )
  }


export default Mars;

