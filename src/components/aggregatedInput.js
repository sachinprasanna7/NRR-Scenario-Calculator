import React from 'react'
import { useState } from 'react';

function AggregatedInput(props) {
    const [textForRuns, setTextForRuns] = useState('0');
    const [textForOvers, setTextForOvers] = useState('0.0');
    const [textAgainstRuns, setTextAgainstRuns] = useState('0');
    const [textAgainstOvers, setTextAgainstOvers] = useState('0.0');

    const handleOnChangeForRuns = (e) => {
      setTextForRuns(e.target.value);
      props.handleInputChange('for', 'runs', e.target.value);
    }

    const handleOnChangeForOvers = (e) => {
      setTextForOvers(e.target.value);
      props.handleInputChange('for', 'overs', e.target.value);
    }

    const handleOnChangeAgainstRuns = (e) => {
      setTextAgainstRuns(e.target.value);
      props.handleInputChange('against', 'runs', e.target.value);
    }

    const handleOnChangeAgainstOvers = (e) => {
      setTextAgainstOvers(e.target.value);
      props.handleInputChange('against', 'overs', e.target.value);
    }


  return (
    <>
    <div className="input-group my-2">
      <span className="input-group-text">{`Enter for runs`}</span>
        <input type="number"  value={textForRuns} onChange={handleOnChangeForRuns} aria-label="For Runs" className="form-control"/>
    </div>
    <div className="input-group my-2">
      <span className="input-group-text">{`Enter for overs`}</span>
        <input type="text"  value={textForOvers} onChange={handleOnChangeForOvers} aria-label="For Overs" className="form-control"/>
    </div>
    <div className="input-group my-2">
      <span className="input-group-text">{`Enter against runs`}</span>
        <input type="number"  value={textAgainstRuns} onChange={handleOnChangeAgainstRuns} aria-label="Againts Runs" className="form-control"/>
    </div>
    <div className="input-group my-2">
      <span className="input-group-text">{`Enter against overs`}</span>
        <input type="text"  value={textAgainstOvers} onChange={handleOnChangeAgainstOvers} aria-label="Against Overs" className="form-control"/>
    </div>
    </>
  );
}

export default AggregatedInput;
