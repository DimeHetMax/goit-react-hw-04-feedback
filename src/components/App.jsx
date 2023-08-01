import React, {Component} from "react";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions";
import {Statistics} from "components/Statistics/Statistics"
import {Notification} from "components/Notification/Notification"
import { Section } from "./Section/Section";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  array = ["good", "neutral", "bad"]

  countTotalFeedback = (prev) =>{
    return(
      prev.good + prev.neutral + prev.bad
    )

  }
  countPositiveFeedbackPercentage=(prev)=>{
    const { good, total } = prev;
    if (total === 0) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return positivePercentage.toFixed(0);
  
  }
  handelOnClick =(event)=>{
    this.setState(prevState => {
      return{
        [event.target.value]: prevState[event.target.value] + 1,
      }
    })
    this.setState(prevState => {
      const totalFeedback = this.countTotalFeedback(prevState)
      return{
        total: totalFeedback,
      }
    })
    this.setState(prevState =>{
      const feedbackPecentage = this.countPositiveFeedbackPercentage(prevState)
      return{
        positive: feedbackPecentage,
      }
    })
  }
  render(){
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);
    return(
      <div>
        <Section title="Pleace leave feedback">
          <FeedbackOptions options={this.array} onLeaveFeedback={this.handelOnClick}/>
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
             <Notification message="There is no feedback"/>
          ):(
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
          )}
         </Section>
        
      </div>
     
    )
  }
}
