import React from 'react'
import AggregatedInput from './aggregatedInput';
import { useState } from 'react';

function CompleteBattingSecond() {
  // const [runsScored, setRunsScored] = useState(0);
  const [forRuns, setForRuns] = useState(0);
  const [forOvers, setForOvers] = useState(0);
  const [againstRuns, setAgainstRuns] = useState(0);
  const [againstOvers, setAgainstOvers] = useState(0);
  const [nrr, setNRR] = useState(0);
  const [tableRows, setTableRows] = useState([]);

  // create a dictionary to store overs and balls like {1 : 0.1, 2 : 0.2, 3 : 0.3, 4 : 0.4, 5 : 0.5, 6 : 1}
  // this will help in converting overs to balls and vice versa
  const oversToBalls = {};
  oversToBalls[0] = '0.0';
  for (let i = 1; i <= 120; i++) {
    const overs = Math.floor(i / 6);
    const balls = i % 6;
    oversToBalls[i] = `${overs}.${balls}`;
  }


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

  // const handleRunsChange = (e) => {
  //   setRunsScored(parseInt(e.target.value));
  // };

  const calculateOversInBalls = (overs) => {
    if (typeof overs !== 'string') {
      return 0;
    }

    const oversArray = overs.split('.');
    if (oversArray.length >= 2) {
    }

    else {
      let flag = true;
      const regex = /^[0-9]+$/;

      for (let i = 0; i < oversArray.length; i++) {
        if (!regex.test(oversArray[i])) {
        }

        if (i === 1 && parseInt(oversArray[i]) > 5) {
        }
      }

      if ((oversArray.length === 1 && parseInt(oversArray[0]) === 0) || (oversArray.length === 2 && parseInt(oversArray[0]) === 0 && parseInt(oversArray[1]) === 0)) {

      }

      if (flag) {
        if (oversArray.length < 2) {
          return parseInt(oversArray[0]) * 6;
        }

        else {
          const balls = parseInt(oversArray[0]) * 6 + parseInt(oversArray[1]);
          return balls;
        }
      }
    }
  }

  const calculateNRR = () => {
    const forRunRate = (forRuns / forOvers) * 6;
    const againstRunRate = (againstRuns / againstOvers) * 6;
    const NRR = forRunRate - againstRunRate;

    setNRR(NRR);

    const rows = [];

    for(let i = 10; i <= 300; i = i + 10){
      let row_nrr = [];
      for(let j = 0 ; j <= 20 ; j++){
        const againstNRR = ((againstRuns + (i-1)) / (againstOvers + 120)) * 6;
        const newForNRR = ((forRuns + i) / (forOvers + (j*6))) * 6;
        const finalNRR = newForNRR - againstNRR;

        // rounding to 5 decimal places
        const nrrRounded = Math.round(finalNRR * 1000) / 1000;
        row_nrr.push(nrrRounded);
      }

      rows.push(
        <tr key={i}>
          <td>{i}</td>
          {row_nrr.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );      
    }

    setTableRows(rows);

  };

  return (
    <div>
      <h1>Batting Second Complete Scenario</h1>
      <AggregatedInput handleInputChange={handleInputChange} />
      <div className='container'>
        <button type="button" className="btn btn-primary my-2" onClick={calculateNRR}>Calculate</button>
      </div>
      <h1>Before Match NRR: {nrr}</h1>
      <div>
        <table className="table-success table-bordered container my-3">
          <thead>
            <tr>
              <th scope="col">Target/Overs</th>
              <th scope="col">0.0</th>
              <th scope="col">1.0</th>
              <th scope="col">2.0</th>
                <th scope="col">3.0</th>
                <th scope="col">4.0</th>
                <th scope="col">5.0</th>
                <th scope="col">6.0</th>
                <th scope="col">7.0</th>
                <th scope="col">8.0</th>
                <th scope="col">9.0</th>
                <th scope="col">10.0</th>
                <th scope="col">11.0</th>
                <th scope="col">12.0</th>
                <th scope="col">13.0</th>
                <th scope="col">14.0</th>
                <th scope="col">15.0</th>
                <th scope="col">16.0</th>
                <th scope="col">17.0</th>
                <th scope="col">18.0</th>
                <th scope="col">19.0</th>
                <th scope="col">20.0</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompleteBattingSecond;
