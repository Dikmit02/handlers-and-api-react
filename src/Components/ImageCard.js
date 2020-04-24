import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef=React.createRef();
        this.state={spans:0};
    }

    componentDidMount(){
        // it  is showing 0 height because image from src is downloaded baad mein but 
        //console.log is running before therfore it is showing 0 height

        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10);
        this.setState({spans})
    }

    render(){
        const{description,urls}=this.props.image;

        return(
            //{this.state.spans} seeting rows according to height
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                {/* // binding with dom this.imageRef */}
                <img ref={this.imageRef} alt={description} src={urls.regular} ></img>
            </div>
        )
    }
}

export default ImageCard;