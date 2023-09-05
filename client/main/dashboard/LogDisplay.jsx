import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const getLogID = (dispatch) => {

};

const LogDisplay = ({ data })=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <button onClick={()=>{
      getLogID(dispatch, data);
      navigate('/main/logviewer');
    }}>
      Some Text
    </button>
  );
};

export default LogDisplay;