import React from 'react';

const ImageList =(props)=>{
   
    
        // const im=props.images.map((img)=>{
        //     // we have to assign a key property to the root element 
        //     // if suppose we have something like this
        //     // <div key={img.id}>
        //     //     <img></img>
        //     // </div>

        //     // then id will be added toroot element div not imag
        //     return <img key={img.id} alt={img.description} src={img.urls.regular}></img>
        // })

        const im=props.images.map(({id,description,urls})=>{
           
            return <img key={id} alt={description} src={urls.regular}></img>
        })


        
        return <div>{im}</div>
    
}

export default ImageList;