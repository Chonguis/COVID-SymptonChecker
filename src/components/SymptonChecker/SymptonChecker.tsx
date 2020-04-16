import React, { Component } from 'react';
import FormComponent from '../FormComponent/FormComponent';

interface State {
  symptons : {
    severeBreathing: boolean | null;
    severeFever: boolean | null;
    severePressure: boolean | null;
  
    cough: boolean | null;
    fever: null,
  
    travel: boolean | null;
    directContact: boolean | null;
    work: boolean | null;
  
    highBloodPressure: boolean | null;
    asthma: boolean | null;
    extremeObesity: boolean | null;
    heartProblems: boolean | null;

    highRiskAge: boolean | null;    
  },
  demographics: {
    age: number | null;
    country: string | null;
    municipality: string | null;
  }
}

class SymptonChecker extends Component<{}, State> {
  constructor(props: any){
    super(props);

    this.state = {
      symptons: {
        severeBreathing: null,
        severeFever: null,
        severePressure: null,
  
        cough: null,
        fever: null,
  
        travel: null,
        directContact: null,
        work: null,
  
        highBloodPressure: null,
        asthma: null,
        extremeObesity: null,
        heartProblems: null,

        highRiskAge: null,
      },
      demographics: {
        age: null,
        country: null,
        municipality: null,
      }
    }
  }
  render() {
    return (
      <div>
        <FormComponent />
        <FormComponent />
        <FormComponent />
        <FormComponent />
        <FormComponent />
        <FormComponent />
        <FormComponent />
      </div>
    )
  }
}

export default SymptonChecker;
