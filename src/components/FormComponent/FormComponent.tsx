import React, { FormEvent, ChangeEvent } from 'react';
import './FormComponent.css';
import { FormControl, FormControlLabel, Checkbox, FormLabel, FormGroup, RadioGroup, Radio } from '@material-ui/core';
import Checklist from './Checklist/Checklist';

interface Props {
  inputs: string[];
  title: string;
  description: string;
  multiple?: boolean;
  changeCheckbox: (e: ChangeEvent<HTMLInputElement>, id?: string) => void;
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(document.getElementById("id1"));
}

const FormComponent:React.FC<Props> = ({inputs, title, description, multiple, changeCheckbox }) => {
  let form: JSX.Element;
  if(multiple){
    form = 

    <FormControl component="fieldset">
      <FormLabel component="legend">Mark all that apply</FormLabel>
      <FormGroup>
        {inputs.map(input => {
          return <FormControlLabel
            control={<Checkbox name={input} onChange={(e) => changeCheckbox(e, input)} />}
            label={input}
          />
        })}
      </FormGroup>
  </FormControl>

    
  } else {
    form =     

    <FormControl component="fieldset">
      <FormLabel component="legend">Mark one</FormLabel>
      <RadioGroup value="None" onChange={(e) => changeCheckbox(e)}>
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
    </FormControl>
    
    // <form onSubmit={handleSubmit}>
    //         <h1>{title}</h1>
    //         <p>{description}</p>
    //         {inputs.map(input => {
    //           return "Algo diferente por joder"
    //         })}
    //         <button type="submit">Submit</button>
    //       </form>
  }
  return (
    <div className="FormComponent-form">
      {form}
    </div>
  )
}

export default FormComponent;