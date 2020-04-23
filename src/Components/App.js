import React from 'react';
import ReactDOM from 'react-dom';
import axios from './axios';
import SearchBar from './SearchBar';



class App extends React.Component{
    onSearchSubmit=(text)=>{
        console.log(text)
    }
    render(){
        return(
            <div className="ui container " style={{marginTop:'10px'}}>
               <SearchBar  onSubmitProp={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;