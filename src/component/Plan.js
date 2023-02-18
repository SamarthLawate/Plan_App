import React from 'react';

function Plan(props) {
  return (
    <div className='row'>
    <li className='shadow p-2 my-3 col-sm-9'>{props.value}</li>
    <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>Done</button>
    </div>
  );
}
export default Plan;