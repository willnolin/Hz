import Canvas from "./Canvas"
export default function Display(props) {

  const { scoreCount, wrongCount, message } = props;

  return (
    <>
    <div className="display-screen-container">
      <div className="score-xxx-row">
        {console.log(wrongCount)}
        <h4 id="xxx">{[...Array(wrongCount)].map(e => 'X')}</h4>
        <h4 id="score">{`Score: ${scoreCount}`}</h4>
      </div>      
        <div className="message-container">
       
        <p className="result-message">{message}</p>
      </div>
    </div>
  </>
  )
}

