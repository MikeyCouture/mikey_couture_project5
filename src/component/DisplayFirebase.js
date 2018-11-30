import React, { Component } from "react";

class DisplayFirebase extends Component {
    render() {
        // console.log(this.props.phrase)
        return(
            Object.entries(this.props.phrase).map((taco) => {
                return (
                    <div>
                        <div key={taco[0]}>
                            <p>Text: {taco[1].text}</p>
                            <p>Translation: {taco[1].translated}</p>
                        </div>
                    </div>
                )
            })
        )
    };
};


export default DisplayFirebase;


