import React, {Component} from "react";

export class FeedbackOptions extends Component{
    render(){
        return(
            <>
            {/* <h1>Pleace leave feedback</h1> */}
            {this.props.options.map((btn,index) => <button key ={index} onClick ={this.props.onLeaveFeedback}style={{margin:5, width: 100}} className="button" value={btn}>{btn}</button>)}
            </>
        )
    }
}