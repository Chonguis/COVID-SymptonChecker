import React, { FormEvent, ChangeEvent } from 'react';
import './FormComponent.css';
import { FormControl, FormControlLabel, Checkbox, FormLabel, FormGroup, RadioGroup, Radio, Button } from '@material-ui/core';
import Checklist from './Checklist/Checklist';

interface Props {
  inputs: string[];
  title: string;
  description: string;
  multiple?: boolean;
  symptonValue?: string;
  changeCheckbox: (e: ChangeEvent<HTMLInputElement>, id?: string) => void;
  symptonsState?: null | {
    severeBreathing: boolean | null | undefined;
    severeFever: boolean | null | undefined;
    severePressure: boolean | null | undefined;
  
    cough: boolean | null | undefined;
    fever: boolean | null,
  
    travel: boolean | null | undefined;
    directContact: boolean | null | undefined;
    work: boolean | null | undefined;
  
    highBloodPressure: boolean | null | undefined;
    asthma: boolean | null | undefined;
    extremeObesity: boolean | null | undefined;
    heartProblems: boolean | null | undefined;

    highRiskAge: boolean | null | undefined;    

    [key: string]: boolean | null | undefined;
  }
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(document.getElementById("id1"));
}

const FormComponent:React.FC<Props> = ({inputs, title, description, multiple, changeCheckbox, symptonValue, symptonsState }) => {
  let form: JSX.Element;
  let newSymptonsState: {
    [key: string]: boolean | undefined;
  } = {};
  for (const key in symptonsState) {
    if (symptonsState[key] == null) {
      newSymptonsState[key] = undefined;      
    }
  }
  console.log('newSymptonsState', newSymptonsState, symptonsState);
  if(multiple){
    form = 
    <FormControl component="fieldset">
      <FormLabel component="legend">Mark all that apply</FormLabel>
      <FormGroup>
        {inputs.map((input, i) => {
          return <FormControlLabel
            control={<Checkbox checked={newSymptonsState[input]} name={input} onChange={(e) => changeCheckbox(e, input)} />}
            label={input}
            key={input + i}
          />
        })}
      </FormGroup>
      <Button type="submit">Submit</Button>
  </FormControl>

    
  } else {
    form = 
    <FormControl component="fieldset">
      <FormLabel component="legend">Mark one</FormLabel>
      <RadioGroup value={symptonValue} onChange={(e) => changeCheckbox(e)}>
        {inputs.map(input => {
          return <FormControlLabel
            control={<Radio name={input} />}
            label={input}
            value={input}
          />
        })}
        <FormControlLabel
            control={<Radio name={"Both"} />}
            value="Both"
            label={"Both"} />
            <FormControlLabel
            control={<Radio name={"None"} />}
            value="None"
            label={"None"} />
      </RadioGroup>
      <Button type="submit">Submit</Button>
    </FormControl>
  }
  return (
    <div className="FormComponent-form">
      <h1>{title}</h1>
      <p>{description}</p>
      {form}
    </div>
  )
}

export default FormComponent;