import React, {Component} from "react";

export class Statistics extends Component{

    render(){
        return(
            <>
            <p>Good:{this.props.good}</p>
            <p>Neutral:{this.props.neutral}</p>
            <p>Bad:{this.props.bad}</p>
            <p>Total:{this.props.total}</p>
            <p>Posiitive Feedback: {this.props.positivePercentage}%</p>
            </>
        )
}
}