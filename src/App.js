import React, {useState} from 'react';
import UserInput from './components/userInput.js';
import Navbar from './components/navbar.js';


function App() {

  const [forRuns, setForRuns] = useState(0);
  const [forOvers, setForOvers] = useState(0);
  const [againstRuns, setAgainstRuns] = useState(0);
  const [againstOvers, setAgainstOvers] = useState(0);
  const [nrr, setNRR] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleFirstBattingClick = () => {
    setCurrentPage('firstBatting');
  }

  const handleSecondBattingClick = () => {
    setCurrentPage('secondBatting');
  }

  const handleHomeClick = () => {
    setCurrentPage('home');
  }


  const calculateOversInBalls = (overs) => {
    if (typeof overs !== 'string') {
      return 0;
    }
  
    const oversArray = overs.split('.');
    if (oversArray.length >= 2) {
      setIsValid(false);
    }

    else{
      let flag = true;
      const regex = /^[0-9]+$/ ;

      for (let i = 0; i < oversArray.length; i++) {
        if (!regex.test(oversArray[i])) {
          setIsValid(false);
          flag = false;
        }

        if(i===1 && parseInt(oversArray[i]) > 5){
          setIsValid(false);
          flag = false;
        }
      }

      if((oversArray.length === 1 && parseInt(oversArray[0]) === 0) || (oversArray.length === 2 && parseInt(oversArray[0]) === 0 && parseInt(oversArray[1]) === 0)){
        setIsValid(false);
        flag = false;
      }

      if(flag){
        if (oversArray.length < 2) {
          setIsValid(true);
          return parseInt(oversArray[0]) * 6;
        }

        else{
          setIsValid(true);
          const balls = parseInt(oversArray[0]) * 6 + parseInt(oversArray[1]);
          return balls;
        }
      }
    }
  }

  const calculateNRR = () => {
    if (isValid) {
      const forRunRate = (forRuns / forOvers)*6;
      const againstRunRate = (againstRuns / againstOvers)*6;
      const nrr = forRunRate - againstRunRate;
      console.log(forRuns, forOvers, againstRuns, againstOvers, forRunRate, againstRunRate, nrr);
      setNRR(nrr);
    }
    else{
      setNRR("Invalid Input. Please use only numbers and valid overs format. Eg: 4.2, 4.0, 4");
    }
  };


  const handleInputChange = (team, type, value) => {
    if (team === 'for') {
      if (type === 'runs') {
        setForRuns(parseInt(value));
      } else if (type === 'overs') {
        setForOvers(calculateOversInBalls(value));
      }
    } else if (team === 'against') {
      if (type === 'runs') {
        setAgainstRuns(parseInt(value));
      } else if (type === 'overs') {
        setAgainstOvers(calculateOversInBalls(value));
      }
    }
  };

  return (
    <>
    <Navbar />
    <UserInput team = "for" type = "runs" onChange = {handleInputChange}/>
    <UserInput team = "for" type = "overs" onChange = {handleInputChange} />
    <UserInput team = "against" type = "runs" onChange = {handleInputChange} />
    <UserInput team = "against" type = "overs" onChange = {handleInputChange} />
    <button type="button" onClick = {calculateNRR} className="btn btn-primary">Calculate</button>
    <h2>{`Net Run Rate: ${nrr}`}</h2>

    </>
  );
}

export default App;
