import React from 'react';


import './row.css'
const Row = ({left, right}) => {
  return (
    <div className='row'>
      <div className='left'>
        {left}
      </div>
      <div className='right'>
        {right}
      </div>
    </div>
  )
}

export default Row;