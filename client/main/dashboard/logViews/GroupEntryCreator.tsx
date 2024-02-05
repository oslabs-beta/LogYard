/**
 * ************************************
 *
 * @module  GroupEntryCreator
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description .jsx - Used to display a data group of logs in a Table
 * 
 * ************************************
 */

import { useSelector, useDispatch } from 'react-redux';
import { setFilteredLogs } from '../../../state/actions/actions';
import { InspectEntryProps, TextEntryProps } from './types';
import { RootState } from '../../../state/store/store';
import { LogItem } from '../../../state/reducers/logsReducer';

const TextEntry = ({ input }: TextEntryProps) => (<> {input} </>);

const InspectEntry = ({ groupKey }: InspectEntryProps) => {
  const dispatch = useDispatch();
  const localLogs: any = useSelector((state: RootState)=> state.logsReducer.filteredLogs[groupKey as number]);

  return (
    <button onClick={()=>{
      dispatch(setFilteredLogs(localLogs));
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="darkgreen" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  );
};

const GroupEntryCreator = (key: string, value: []) => {
  console.log("KEY", key)
  console.log("VALUE", value)
  return [
    <TextEntry key={Math.random()} input={key}/>,
    <TextEntry key={Math.random()} input={value.length}/>,
    <InspectEntry key={Math.random()} groupKey={key}/>,
  ];
};

export default GroupEntryCreator;