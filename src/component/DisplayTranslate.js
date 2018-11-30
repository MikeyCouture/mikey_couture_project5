import React, {Component} from "react";

class DisplayTranslate extends Component{
    render(){
        return(
            <div>
                { this.props.submitedText ? <h3>({this.props.submitedText})</h3> : <h3>{""}</h3> }
                { this.props.translated ? <h2>Dothraki Translation: {this.props.translated}</h2> : <h2>{""}</h2> }
            </div>
        )
    }
}

export default DisplayTranslate 

