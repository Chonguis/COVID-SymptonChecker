import React, { FormEvent } from 'react';
import Checklist from './Checklist/Checklist';

interface Props {
  inputs: string[];
  title: string;
  description: string;
  back: () => void;
  next: () => void;
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(document.getElementById("id1"));
}

const FormComponent:React.FC<Props> = ({inputs, title, description, back, next}) => {
  return (
    <div>
      <span><a href="#" onClick={back}>Back</a></span><span><a href="#" onClick={next}>Next</a></span>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {inputs.map(input => {
            return <li>{input}</li>;
          })}
        </ul>
        <Checklist id="id1" label="label1" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormComponent;