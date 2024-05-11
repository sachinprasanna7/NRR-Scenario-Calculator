import React from 'react'
import AggregatedInput from './aggregatedInput';

function BattingSecond() {
  return (
    <div>
      <h1>Batting Second</h1>
      <AggregatedInput />
      <div className="input-group my-2">
        <span className="input-group-text">`Enter Target to Chase:`</span>
        <input type="number" aria-label="Chasing Input" className="form-control" />
      </div>
      <div>
        <button type="button" className="btn btn-primary my-2">Calculate</button>
      </div>
      <div>
        <table className="table-success container my-3">
          <thead>
            <tr>
              <th scope="col">Overs Taken/Target Chased</th>
              <th scope="col">160</th>
              <th scope="col">161</th>
              <th scope="col">162</th>
              <th scope="col">163</th>
              <th scope="col">164</th>
              <th scope="col">165</th>
              <th scope="col">166</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.0</td>
            </tr>
            <tr>
              <td>0.1</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BattingSecond;
