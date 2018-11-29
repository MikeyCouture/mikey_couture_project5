import React, {Component} from 'react';


class Form extends Component{
    render(){
        return(
            <div>
            <form onSubmit={this.props.handleSubmit} action="">
                <label htmlFor="text">Enter your phrase here: </label>
                <input onChange={this.props.handleChange} value={this.state.text} type="text" id="text" />
                <input type="submit" value="Dothraki Me!" id="translated" />
            </form>
            </div>
        )
    }

}

export default Form;

