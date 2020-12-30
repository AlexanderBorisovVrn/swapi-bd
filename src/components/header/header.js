import React from 'react';
import './header.css';

const Header = () => {
  let navItem = [
    {
      label: 'people',
      id: 1
    },
    {
      label: 'starship',
      id: 2
    },
    {
      label: 'planet',
      id: 3
    }
  ];
  let createNavItem = navItem.map(el => (
    <li key={el.id}>{el.label}</li>
  ));
  return (
    <div className='header'>
      <div className='logo'><span>Star Db</span></div>
      <ul className='nav'>
        {createNavItem}
      </ul>
    </div>
  )
}

export default Header;