import React, {ChangeEvent} from 'react';
import './DemographicForm.css'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { allCountries } from '../../countries';

interface Props {
  title: string;
  description: string;  
  onChangeSelect: (event: ChangeEvent<{}>, value: string | null, id:string,) => void;
  onChangeAge: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void;
}

const DemographicForm:React.FC<Props> = ({onChangeSelect, onChangeAge}) => {
  return (
    <div>
      <div>
        <form className="form">
          <TextField label="Age" type="number" 
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChangeAge(event, "age")}          
          />
          <Autocomplete
            className="autocomplete"
            id="combo-box-demo"
            options={allCountries.sort()}
            onChange={(event: ChangeEvent<{}>, value: string | null) => onChangeSelect(event, value, "country")}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
            // value={this.state[data.id]}
          />
        </form>
      </div>
    </div>
  )
}

export default DemographicForm;
