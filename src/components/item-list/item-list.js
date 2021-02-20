import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => {
 const {data,onItemSelected,children} = props;
  const renderItems=(arr)=>{
    return arr.map((item) => {
      const {id} = item;
           return <li
        className='list-group-item person-list-item'
        key={id}
        onClick={() => onItemSelected(id)}> {children(item)} </li>
    })
  }
  return (
    <ul className='person-list'>
    {renderItems(data)}
    </ul>
  )
}

ItemList.propTypes={
  data:PropTypes.array,
  onItemSelected:PropTypes.func,
  children:PropTypes.func
}


export default ItemList;
