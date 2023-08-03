export const FeedbackOptions =({options,onLeaveFeedback})=>{
    return(
        options.map((btn,index) => <button key ={index} onClick={onLeaveFeedback} style={{margin:5, width: 100}} className="button" value={btn}>{btn}</button>)
    )
}