import React from 'react';
import './item-list.css';

const ItemList = ({item}) => {
  return (
    <ul className='person-list'>
    {item}
    </ul>
  )
}

export default ItemList;
