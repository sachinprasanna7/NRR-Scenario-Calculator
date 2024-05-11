import React from 'react'
import AggregatedInput from './aggregatedInput';

function BattingSecond() {
  return (
    <div>
      <h1>Batting Second</h1>
      <AggregatedInput />
      <div className="input-group my-2">
        <span className="input-group-text">`Enter Target to Chase:`</span>
        <input type="number"  aria-label="Chasing Input" className="form-control"/>
      </div>
    </div>
  );
}

export default BattingSecond;
