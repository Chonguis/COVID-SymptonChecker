import React, { FormEvent } from 'react';
import Checklist from './Checklist/Checklist';

interface Props {
  inputs: string[];
  title: string;
  description: string;
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(document.getElementById("id1"));
}

const FormComponent:React.FC<Props> = ({inputs, title, description}) => {
  return (
    <div>
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