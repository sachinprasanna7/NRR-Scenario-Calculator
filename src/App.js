import React, {useState} from 'react';
import Navbar from './components/navbar.js';
import BattingFirst from './components/battingFirst.js';
import BattingSecond from './components/battingSecond.js';
import CompleteBattingSecond from './components/completeCalculatorChasing.js';
import Help from './components/help.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator.js';


function App() {

  const [forRuns, setForRuns] = useState(0);
  const [forOvers, setForOvers] = useState(0);
  const [againstRuns, setAgainstRuns] = useState(0);
  const [againstOvers, setAgainstOvers] = useState(0);
  const [nrr, setNRR] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [currentPage, setCurrentPage] = useState('calculator');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


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
    <Router>
    <Navbar title="NRR-Help"/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/BattingFirst" element = {<BattingFirst/>}/>
          <Route exact path="/BattingSecond" element = {<BattingSecond/>}/>
          <Route exact path="/CompleteBattingSecond" element = {<CompleteBattingSecond/>}/>
          <Route exact path="/Help" element = {<Help/>}/>
          <Route exact path="/" element = {<Calculator/>}/>
    </Routes>
    </div>
    </Router>

    </>
  );
}

export default App;
