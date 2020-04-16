import React, { Component, ChangeEvent } from 'react';
import './SymptonChecker.css';
import FormComponent from '../FormComponent/FormComponent';
import DemographicForm from '../DemographicForm/DemographicForm';

interface State {
  symptons : {
    severeBreathing: boolean | null;
    severeFever: boolean | null;
    severePressure: boolean | null;
  
    cough: boolean | null;
    fever: boolean | null,
  
    travel: boolean | null;
    directContact: boolean | null;
    work: boolean | null;
  
    highBloodPressure: boolean | null;
    asthma: boolean | null;
    extremeObesity: boolean | null;
    heartProblems: boolean | null;

    highRiskAge: boolean | null;    

    [key: string]: boolean | null;
  },
  demographics: {
    age: string | null;
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
        <DemographicForm 
          // inputs={["age", "country", "municipality"]}
          title={"Demographics"}
          description={"Put your name and description so we know who u are"}
          onChangeSelect={this.onChangeSelect}
          onChangeAge={this.onChangeAge}
          />,
        <FormComponent 
          inputs={["severeBreathing", "severeFever", "severePressure"]}
          title={"Severe Symptons"}
          description={"Are you experiencing any of these"}
          multiple={true}
          changeCheckbox={this.changeCheckbox}
         />,
        <FormComponent 
          inputs={["cough", "fever"]}
          title={"Symptons"}
          description={"Do you have any of this"} 
          changeCheckbox={this.changeCheckbox}
        />,
        <FormComponent 
          inputs={["travel", "directContact", "work"]}
          title={"Contact"}
          description={"Have you been in contact"}
          changeCheckbox={this.changeCheckbox}
          />,
        <FormComponent
          inputs={["highBloodPressure", "extremeObesity", "asthma", "heartProblems"]}
          title={"Preexisting conditions"}
          description={"Do you have any of these pre existing conditions?"} 
          changeCheckbox={this.changeCheckbox}
           />,
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
  onChangeSelect = (event: ChangeEvent<{}>, value: string | null, id:string) => {
    let demographics: {
      country: string | null;
      age: string | null;
      municipality: string | null;
      [key: string]: string | null;
    };
    demographics = this.state.demographics;
    demographics[id] = value;
    this.setState({
      demographics,      
    });
  }
  onChangeAge = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string):void => {
    let demographics: {
      country: string | null;
      age: string | null;
      municipality: string | null;
      [key: string]: string | null;
    };
    let highRiskAge: boolean | null = false;
    demographics = this.state.demographics;
    demographics[id] = e.target.value;
    if(parseInt(e.target.value) > 60 || parseInt(e.target.value) < 18) {
      highRiskAge=true;
    } else {
      highRiskAge=false;
    }
    let symptons: {
      severeBreathing: boolean | null;
      severeFever: boolean | null;
      severePressure: boolean | null;
    
      cough: boolean | null;
      fever: boolean | null,
    
      travel: boolean | null;
      directContact: boolean | null;
      work: boolean | null;
    
      highBloodPressure: boolean | null;
      asthma: boolean | null;
      extremeObesity: boolean | null;
      heartProblems: boolean | null;
  
      highRiskAge: boolean | null;    
  
      [key: string]: boolean | null;
    } = this.state.symptons;

    symptons["highRiskAge"] = highRiskAge
    this.setState({
      demographics,      
      symptons,
    });  
  }
  changeCheckbox = (e: ChangeEvent<HTMLInputElement>, id?:string) => {
    let symptons: {
      severeBreathing: boolean | null;
      severeFever: boolean | null;
      severePressure: boolean | null;
    
      cough: boolean | null;
      fever: boolean | null,
    
      travel: boolean | null;
      directContact: boolean | null;
      work: boolean | null;
    
      highBloodPressure: boolean | null;
      asthma: boolean | null;
      extremeObesity: boolean | null;
      heartProblems: boolean | null;
  
      highRiskAge: boolean | null;    
  
      [key: string]: boolean | null;
    } = this.state.symptons;
    if (id) {
      console.log('changeCheckbox', e.target.checked, id)
      symptons[id] = e.target.checked;
      this.setState({ symptons })
    } else {
      console.log('changeRadio', e.target.value)
      if(e.target.value == "Both"){
        symptons["cough"] = true;
        symptons["fever"] = true;        
      } else if (e.target.value !== "None") {
        symptons[e.target.value] = true;
      } else {
        symptons["cough"] = false;
        symptons["fever"] = false;  
      }
      console.log(symptons, "symptons");
      this.setState({ symptons })
    }
  }
  getRiskAge(){
    if(this.state.symptons.highRiskAge !== null){
      return this.state.symptons.highRiskAge ? "High risk age" : "No risk age";
    }
  }
  render() {
    let { severeBreathing, severeFever, severePressure, cough, fever, travel, directContact, work, highBloodPressure, asthma, extremeObesity, heartProblems, highRiskAge } = this.state.symptons;
    return (
      <div>
        <div className="SymptonChecker-next-container">
          <span><a href="#" onClick={this.back}>Back</a></span><span><a href="#" onClick={this.next}>Next</a></span>
        </div>
        <div className="SymptonChecker-submitted-data">
          <span>{this.state.demographics.country}</span>
          <span>{this.state.demographics.age}</span>
          <span>{this.getRiskAge()}</span>
          <span>{cough && "Patient has cough"}</span>
          <span>{fever && "Patient has fever"}</span>
          <span>{severeBreathing && "Patient has severeBreathing"}</span>
          <span>{severeFever && "Patient has severeFever"}</span>          
          <span>{severePressure && "Patient has severePressure"}</span>
        </div>
        {this.currentForm()}
      </div>
    )
  }
}

export default SymptonChecker;
