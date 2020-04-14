import React, { Component, FormEvent } from 'react';
import Checklist from './Checklist/Checklist';

class SymptonChecklist extends Component {
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(document.getElementById("id1"));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Checklist id="id1" label="label1" />
        </form>
      </div>
    )
  }
}

export default SymptonChecklist;