import React, {Component} from "react";

class DisplayTranslate extends Component{
    render(){
        return(
            <div>
                { this.props.submitedText ? <h2>{this.props.submitedText}</h2> : <h2>{""}</h2> }
                { this.props.translated ? <h2>{this.props.translated}</h2> : <h2>{""}</h2> }
            </div>
        )
    }
}

export default DisplayTranslate 

