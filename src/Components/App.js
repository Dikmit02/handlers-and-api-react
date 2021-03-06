import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component{
    //METHOD 1 promise
    // onSearchSubmit=(term)=>{
    //     // setting up axios for api requests
    //     //these are asynchronous request(take some time to go to unpleash and come back) when its doing ie getting request in meanwhile the onSubmit is executed
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params:{query:term},
    //         headers:{
    //             Authorization: 'Client-ID U3MkMtC24XNHUe1zal9clTuYOyMnY_8Q6g3EFzuwpF4'
    //         }
    //     })
    //     .then(response=>{
    //         //It is a promise whenver a get executed then it is response ki hume kya mila hai reult
    //         console.log(response.data.results)
    //     })
    // }
    state={images:[]}

    //Method 2 using async await
     onSearchSubmit=async (term)=>{
        // setting up axios for api requests
        //these are asynchronous request(take some time to go to unpleash and come back) when its doing ie getting request in meanwhile the onSubmit is executed
       const response=await  unsplash.get('/search/photos',{
            params:{query:term}
           
        })
        
         this.setState({images:response.data.results})
        
    }



    render(){
        return(
            <div className="ui container " style={{marginTop:'10px'}}>
               <SearchBar  onSubmitProp={this.onSearchSubmit} />
               <ImageList  images={this.state.images}/>
            </div>
        )
    }
}

export default App;