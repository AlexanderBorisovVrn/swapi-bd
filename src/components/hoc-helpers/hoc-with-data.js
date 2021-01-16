import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import '../item-list/item-list.css';

function withData(Data, getData) {
  return class extends Component {

    state = {
      data: null
    }
    componentDidMount() {

      getData()
        .then(data => this.setState({data}))
        .catch(err => {
          return
        })
    }

    renderItems(arr) {
      return arr.map((item) => {
        const {id} = item;
               return <li
          className='list-group-item person-list-item'
          key={id}
          onClick={() => this.props.onItemSelected(id)}>{item.name}</li>
      })
    }
    render() {
      let {data} = this.state;
      if (!data) {
        return <ul className='person-list'><Spinner/></ul>
      }
      const item = this.renderItems(data)
      return <Data item={item}/>
    }
  }
}

export default withData;