import React from 'react'
import AggregatedInput from './aggregatedInput';

function BattingFirst() {
  return (
    <div>
      <h1>Batting First</h1>
      <AggregatedInput />
      <div className="input-group my-2">
        <span className="input-group-text">`Enter Runs Scored:`</span>
        <input type="number"  aria-label="Batting Input" className="form-control"/>
      </div>
    </div>
  );
}

export default BattingFirst;
