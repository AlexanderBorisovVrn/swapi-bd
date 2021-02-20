import React from 'react';
import PropTypes from 'prop-types';
import './random-item.css';

const RandomItem = ({planet,methods}) => {
   const {id, name, population, diameter, rotation} = planet;
  const image = methods.getItemImage;
   return (
    <React.Fragment>
      <img
        className='item-img'
        src={image(id)}
        alt=' '/>
      <div className='item-list'>
        <h1>{name}</h1>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span>Rotation period</span>
            <span>{rotation}</span>
          </li>
          <li className='list-group-item'>
            <span>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

RandomItem.propTypes={
  planet:PropTypes.object.isRequired,
  methods:PropTypes.objectOf(PropTypes.func).isRequired
}
export default RandomItem;

