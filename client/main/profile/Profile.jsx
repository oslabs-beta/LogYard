import React from 'react';
import TestGraph from '../visualizer/utility/TestGraph';

const Profile = () => {
  console.log('Rendering');


  return (
    <div className='flex grow flex-col m-2'>
      <TestGraph bindID={'g1'} className={'grow w-full'}/>
      <TestGraph bindID={'g2'} className={'grow'}/>
      <TestGraph bindID={'g3'} className={'grow'}/>
    </div>
    // <div>This is the profile page</div>
  );
};

export default Profile;
