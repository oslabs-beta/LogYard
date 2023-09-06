import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setActiveLog } from '../../state/actions/actions';


const getLogID = (dispatch, data) => {
  dispatch(setActiveLog(data));
};

const LogDisplay = ({ data })=>{
  const { Time, level, meta, message, _id } = data;
  const { Context, LogString } = meta;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const log = useSelector(state=>state.logsReducer.activeLog);


  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {Time}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {_id}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {level}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {message}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {
          Object.entries(Context).map(([key, value])=>{
            return <React.Fragment key={key}> {key}: {value}<br></br></React.Fragment>; 
          })
        }
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

        <button onClick={()=>{
          getLogID(dispatch, data);
          navigate('/main/logviewer');
        }}>
          <img src='../../public/5971.png' alt='Inspect' className='w-8 min-w-8 h-w'></img>
        </button>
      </th>
    </tr>
  );
};

export default LogDisplay;