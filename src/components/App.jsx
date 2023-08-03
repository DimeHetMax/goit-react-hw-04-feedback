import { useState, useEffect } from "react";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions";
import {Statistics} from "components/Statistics/Statistics"
import {Notification} from "components/Notification/Notification"
import { Section } from "./Section/Section";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)
  const array = ["good", "neutral", "bad"]

const handelOnClick =(event)=>{
  if(event.target.value === "good"){
    setGood(prevState => prevState + 1)
    setTotal(prevState => prevState + 1)
  }
  if(event.target.value === "neutral"){
    setNeutral(prevState => prevState + 1)
    setTotal(prevState => prevState + 1)
  }
  if(event.target.value === "bad"){
    setBad(prevState => prevState + 1)
    setTotal(prevState => prevState + 1)
  }
}
// const countPositiveFeedbackPercentage=(good, total)=>{
//       if (total === 0) {
//         return 0;
//       }
//       const positivePercentage = (good / total) * 100;
//       return positivePercentage.toFixed(0);   
// }
useEffect(()=>{
  if(total !== 0){
    const positivePercentage = (good / total) * 100;
    setPositive(positivePercentage.toFixed(0))
  }
},[total])
  return(
    <div>
    <Section title="Pleace leave feedback">
      <FeedbackOptions options={array} onLeaveFeedback={handelOnClick}/>
    </Section>
      <Section title="Statistics">
      {total === 0 ? (
         <Notification message="There is no feedback"/>
      ):(
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
      )}
     </Section>
  </div>
  )
}
// positivePercentage={countPositiveFeedbackPercentage}