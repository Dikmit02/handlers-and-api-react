import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component {

    //Controll Events
    state = { term: '' };




    // uncontrolled events 
    // // commudity convention
    // //on             on
    // //Input          Button
    // //Change         Clicked
    // onInputChange(event){
        // It is a callback functionn invoked whenever a user puts some inout in the text
    //     // this method is called whenever the text inside the input is changed
    //     // to ensure this we will write onChange={this.onInputChange}

    //     //all we are tying can be fetch using event.taregt.value
    //     console.log(event.target.value);
    // }

    onFormSubmit=(event)=>{
        event.preventDefault();

        // console.log(this.state.term);//this points to searchBar as this arrow function helps in the binding 
        // // without arrow function it will give an error

        this.props.onSubmitProp(this.state.term)
    };
    onFormSubmit(event){
        // the default behaviour is to submit the form to some backend(refresh sincewe have no backend so it apperas to be refreshed)
        //  whenever we press enter and here we are preventing the same
        event.preventDefault();

        // console.log(this.state.term);//error
        // it is same as drive() thereforefore no thisis defined and hence error
        // here this is SearchBar and it is broken


        /*class Car{
  
            setDriveSound(sound){
             this.sound=sound 
            }
             drive(){
             return this.sound;
             }
           }  
             const car=new Car();
           car.setDriveSound('vroom');
           
           const drive=car.drive;
           drive()
*/
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    {/* onFormSubmit is just like car.drive() */}
                    <div className="field">
                        <label>Image serach</label>





                        {/* uncontrolled form element */}
                        {/* <input type="text" onChange={this.onInputChange}></input> */}
                        {/* onChange is prop and its name should be onChangeit is an inbuild prop for event handling */}
                        {/* <input type="text" onChange={this.onInputChange}></input>   
                        can also be written as
                         <input type="text" onChange={(event)=>console.log(event.target.value)}></input>
                    */}






                        {/* Controlled component */}
                        <input type="text"
                        // if we set a value on value then it will always show the same 
                            value={this.state.term}
                            onChange={(event) =>this.setState({term:event.target.value.toUpperCase()})}>

                        </input>
                    </div>
                </form>
            </div>
        )
    }
}
// <input type="text" onChange={this.onInputChange}></input>
// we are not puttig this.onInputChange() ie () beacuse if we put () then the function onInputChange
// will always called whenever we rerender the SearchBar 
// when we pass onInputChange it simply menas hat we are passing the refrence only that has to be used
// in somw future time
export default SearchBar;