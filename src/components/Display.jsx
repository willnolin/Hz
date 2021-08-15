import Sinewave from "./SineWave";


export default function Display(props) {

  const { scoreCount, wrongCount, message, freq, amp } = props;

  return (
    <>
    <div className="display-screen-container">
      <div className="score-xxx-row">
        <h4 id="xxx">{[...Array(wrongCount)].map(e => 'X')}</h4>
        <h4 id="score">{`Score: ${scoreCount}`}</h4>
        </div>

        <div className="message-container">
          {(message) ? <p className="result-message"> {message}</p> :
            <Sinewave height="80px" width="200px" freq={freq} amp={amp}></Sinewave>}
          </div>
       
    </div>
  </>
  )
}

