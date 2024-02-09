/**
 * ************************************
 *
 * @module  MainRouter
 * @description Overall layout for any page that requires sign in.
 *
 * ************************************
 */

import { useEffect } from 'react';
import { useNavigate, Outlet, NavigateFunction } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadLogs, setUserData } from '../state/actions/actions';
import NavBar from './NavBar.jsx';
import { Dispatch } from 'redux';
import { LogItem } from '../state/reducers/logsReducer';

const loadAllLogs = async (dispatch: Dispatch<any>, navigate: NavigateFunction) => {
  const response = await fetch('/api/logs');

  if (response.ok) {
    const logData = await response.json() as LogItem[];
    dispatch(loadLogs(logData));
  } else {
    navigate('/');
  }
};

const signOutUser = async (dispatch: Dispatch<any>, navigate: NavigateFunction) => {
  try {
    await fetch('/api/profile/signout', {
      method: 'DELETE',
    });

    dispatch(setUserData({
      _id: '',
    username: '',
    password: '',
    savedFilters: [],
    createdAt: ''
  }));

    navigate('/');

  } catch (err) {
    console.log(err);
  }
};

const MainRouter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadAllLogs(dispatch, navigate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <NavBar
        routes={[
          [ 'Dashboard', () => { navigate('/main'); } ],
          [ 'Visualize', () => { navigate('/main/visualizer'); } ],
          [ 'Settings', () => { navigate('/main/settings'); } ],
          [ 'Sign Out', () => { signOutUser(dispatch, navigate); } ],
        ]}
      />
      <Outlet />
    </div>
  );
};

export default MainRouter;
