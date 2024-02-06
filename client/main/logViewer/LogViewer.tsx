/**
 * ************************************
 *
 * @module  LogViewer
 * @description .tsx - Display data related to an individual log
 * 
 * ************************************
 */

import { useSelector } from 'react-redux';
import { LogItem } from '../../state/reducers/logsReducer';
import { RootState } from '../../state/store/store';

const LogViewer = () => {

  const log: LogItem = useSelector( (state: RootState) => state.logsReducer.activeLog );

  const { timestamp, meta, message, level } = log;

  const { Context } = meta;

  const date = new Date(Date.parse(timestamp)).toLocaleDateString();

  const time = new Date(Date.parse(timestamp)).toLocaleTimeString();

  return (
    <>
      <div className='bg-custom-tan rounded-lg text-custom-darkgreen m-6 mt-14 shadow-2xl'>
        <section id='pageTitle' className='text-center'>
          <h1 className='text-6xl my-12 font-light'>Log Inspection</h1>
        </section>

        <section className='text-center mt-5 mb-10 border-1 border-custom-darkgreen'>

          <div className='border m-5 p-5 rounded-lg shadow-lg border-1 border-custom-darkgreen'>
            <div className='text-4xl font-light'>Date: </div>
            <div className='text-2xl mt-5'>{date} at {time}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg border-1 border-custom-darkgreen'>
            <div className='text-4xl font-light'>Level: </div>
            <div className='text-2xl mt-5'>{level}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg border-1 border-custom-darkgreen'>
            <div className='text-4xl font-light'>Message: </div>
            <div className='text-2xl mt-5'>{message}</div>
          </div>
          <div className='border m-5 p-5 rounded-lg shadow-lg border-1 border-custom-darkgreen'>
            <div className='text-4xl font-light'>Context(s): </div> 
            {
              Object.entries(Context).map(([key, value]: [string, any])=>{
                return <div className='text-2xl mt-5' key={key}> {key}: {value}<br></br></div>; 
              })
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default LogViewer;
