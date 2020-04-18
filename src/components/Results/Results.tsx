import React from 'react';
import Symptons from '../../interfaces/Symptons.interface';

interface Props {
  symptons: Symptons;
}

const Results:React.FC<Props> = ({ symptons, }) => {
  let positiveSymptons: string[] = [];
  for (const key in symptons) {
    if (symptons[key]) {
      positiveSymptons.push(key)
    }
  }
  return (
    <div>
      <h1>Results</h1>
      {positiveSymptons.map(sympton => {
        return <li>{sympton}</li>
      })}
    </div>
  )
}

export default Results
