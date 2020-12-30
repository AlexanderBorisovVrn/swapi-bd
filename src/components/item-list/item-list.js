import React, {Component} from 'react';

import Spinner from '../spinner/spinner'
import './item-list.css'

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    let {getItem} = this.props;
    getItem()
      .then(itemList => this.setState({itemList}))
      .catch(err => {
        return
      })
  }
  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.children;
      const {id} = item;
      return <li
        className='list-group-item person-list-item'
        key={id}
        onClick={() => this.props.onItemSelected(id)}>{label(item)}</li>

    })
  }

  render() {
    let {itemList} = this.state;
    if (!itemList) {
      return <ul className='person-list'><Spinner/></ul>
    }
    const person = this.renderItems(itemList)
    return (
      <ul className='person-list'>
        {person}
      </ul>
    )
  }
}
