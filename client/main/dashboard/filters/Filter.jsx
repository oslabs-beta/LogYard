/**
 * ************************************
 *
 * @module  Filter
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Allows the user to filter logs
 * 
 * ************************************
 */

import React, { useState } from 'react';
import InputBar, {Dropdown, ButtonInput, TextInput} from '../../utility/InputBar/InputBar';

const Filter = (props)=>{
  const [cur, setCur] = useState('');//Rename this
  
  return (
    <div className='flex flex-row pt-5 px-5'>
      {/* Save, Load And Delete */}
      <InputBar className={'mr-5'}>
        <Dropdown label='Load' className='' entries={[
          ['Test Entry 1', ()=>{}], 
          ['Test Entry 2', ()=>{}]]
        }/>
        <TextInput value='' onChange={()=>{}} placeholder='Filter Name'/>
        <ButtonInput label='Save'/>
        <ButtonInput label='Delete'/>
      </InputBar>
      {/* Actual Filter String */}
      <InputBar className={'grow'}>
        <TextInput value={cur} onChange={(e)=>{setCur(e.target.value);}} placeholder='Filter Text' className='grow'/>
        <ButtonInput label='Apply Filter'/>
      </InputBar>
    </div>);
};

export default Filter;