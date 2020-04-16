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
  },
  currentStep: number;
  formSteps: JSX.Element[];
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
      },
      currentStep: 0,
      formSteps: [
        <FormComponent 
          inputs={["age", "country", "municipality"]}
          title={"Demographics"}
          description={"Put your name and description so we know who u are"}
          next={this.next}
          back={this.back} />,
        <FormComponent 
          inputs={["severeBreathing", "severeFever", "severePressure"]}
          title={"Severe Symptons"}
          description={"Are you experiencing any of these"}
          next={this.next}
          back={this.back} />,
        <FormComponent 
          inputs={["cough", "fever"]}
          title={"Symptons"}
          description={"Do you have any of this"} 
          next={this.next}
          back={this.back} />,
        <FormComponent 
          inputs={["travel", "directContact", "work"]}
          title={"Contact"}
          description={"Have you been in contact"} 
          next={this.next}
          back={this.back} />,
        <FormComponent
          inputs={["highBloodPressure", "extremeObesity", "asthma", "heartProblems"]}
          title={"Preexisting conditions"}
          description={"Do you have any of these pre existing conditions?"} 
          next={this.next}
          back={this.back} />,
      ],
    }
  }
  currentForm = () => {
    return this.state.formSteps[this.state.currentStep];
  }
  next = () => {
    if (this.state.currentStep < this.state.formSteps.length - 1) this.setState({currentStep: this.state.currentStep + 1});
  }
  back = () => {
    if (this.state.currentStep > 0) this.setState({currentStep: this.state.currentStep - 1});
  }
  render() {
    return (
      <div>
        {this.currentForm()}
      </div>
    )
  }
}

export default SymptonChecker;
