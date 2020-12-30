import React from 'react';
import './error.css'
import Icon from './death-star-svgrepo-com.svg'
const ErrorView = ()=>{
  return(
    <div className='error'>
        <img alt='' src={Icon}/>
        <div className='error-inner'>
          <span>Shomething went terribly wrong</span>
          <span>We sent drons to fix that</span>
        </div>
    </div>
  )
}

export default ErrorView;
