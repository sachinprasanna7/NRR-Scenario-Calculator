import React from 'react'
import AggregatedInput from './aggregatedInput';
import { useState } from 'react';

function BattingSecond() {
  const [runsScored, setRunsScored] = useState(0);
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

  const handleRunsChange = (e) => {
    setRunsScored(parseInt(e.target.value));
  };

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
    const forRunsFinal = forRuns + runsScored;
    const forOversFinalInBalls = forOvers;
    const againstOversFinalInBalls = againstOvers + 120;
    const againstRunsFinal = againstRuns + runsScored - 1;

    const againstNRR = (againstRunsFinal / againstOversFinalInBalls) * 6;
    for (let i = 0; i <= 120; i++) {
      const newForNRR = (forRunsFinal / (forOversFinalInBalls + i)) * 6;
      const finalNRR = newForNRR - againstNRR;
      const nrrChange = finalNRR - NRR;

      // rounding to 5 decimal places
      const nrrChangeRounded = Math.round(nrrChange * 100000) / 100000;
      const finalNRRRounded = Math.round(finalNRR * 100000) / 100000;
      if(i%6 === 0){
        rows.push(
          <tr key={i}>
            <td>{oversToBalls[i]}</td>
            <td>{nrrChangeRounded}</td>
            <td>{finalNRRRounded}</td>
          </tr>
        );
      }
    }
    setTableRows(rows);

  };

  return (
    <div>
      <h1>Batting Second</h1>
      <AggregatedInput handleInputChange={handleInputChange} />
      <div className="input-group my-2">
        <span className="input-group-text">`Enter Runs to Chase :`</span>
        <input type="number" aria-label="Batting Input" className="form-control" value={runsScored} onChange={handleRunsChange} />
      </div>
      <div className='container'>
        <button type="button" className="btn btn-primary my-2" onClick={calculateNRR}>Calculate</button>
      </div>
      <h1>Before Match NRR: {nrr}</h1>
      <div>
        <table className="table-success table-bordered container my-3">
          <thead>
            <tr>
              <th scope="col">Overs Taken</th>
              <th scope="col">NRR Change</th>
              <th scope="col">Final NRR</th>
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

export default BattingSecond;
