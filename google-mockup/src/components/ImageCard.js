import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        /* We create Ref inside the constructor anytime we want to reach
        into the DOM and interact with an individual element ->
        in this case we create an imageRef */
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {  //Get clientHeight of images after they are loaded into the browser
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10); 
        this.setState({spans});
    }
    
    render() {
        //ES6 Destructuring out this.props.image
        const { description, urls } = this.props.image
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                //We wire up the imageRef by passing it as an img property
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;