import React from 'react';
import PropTypes from 'prop-types'
import './item-details.css'

const ItemDetails = ({item, image,children}) => {
  const {name} = item;
  return (
    <React.Fragment>
      <div className='wrap'>
        <img className='img' src={image} alt=''/>
        <div className='item-list-group'>
          <h1>{name}</h1>
          <ul className='item-details-list'>
            {React
              .Children
              .map(children, (child) => {
                return React.cloneElement(child, {item})
              })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

ItemDetails.propTypes={
  item:PropTypes.object.isRequired,
  children:PropTypes.arrayOf(PropTypes.node)
}

const Record = ({item, field, label}) => {
  return (
    <li className='item-details-item'>
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export {Record};
export default ItemDetails;