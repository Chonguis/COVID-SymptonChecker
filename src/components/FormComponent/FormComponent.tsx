import React, { Component, FormEvent } from 'react';
import Checklist from './Checklist/Checklist';

class FormComponent extends Component {
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(document.getElementById("id1"));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Checklist id="id1" label="label1" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default FormComponent;