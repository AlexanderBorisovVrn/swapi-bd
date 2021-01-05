import React, {Component} from 'react';
import './item-details.css'
import Spinner from '../spinner/spinner';

const Record = ({item, field, label}) => {
  return (
    <li className='item-details-item'>
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export {Record};

export default class ItemDetails extends Component {

  state = {
    item: null,
    error: false,
    loading: true,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }
  onError = err => this.setState({error: true})
  updateItem = () => {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return
    }
    getData(itemId).then(item => {

      return this.setState({
        item,
        loading: false,
        image: getImageUrl(item.id)
      })
    }).catch(this.onError)
  }
  componentDidUpdate(prevprops) {
    if (this.props.itemId != prevprops.itemId) {
      this.setState({loading: true})
      this.updateItem();

    }
  }

  render() {

    const returnDetails = () => {
      let {item: {
          name
        }, image} = this.state;
      return (
        <React.Fragment>
          <div className='wrap'>
            <img className='img' src={image}/>
            <div className='item-list-group'>
              <h1>{name}</h1>
              <ul className='item-details-list'>
                {React
                  .Children
                  .map(this.props.children, (child) => {
                    return React.cloneElement(child, {item})
                  })}
              </ul>
            </div>
          </div>
        </React.Fragment>
      )
    }
    const {loading, error, item} = this.state
    const content = (!loading && !error)
      ? returnDetails(this.state)
      : null;
    const err = (loading || error)
      ? <Spinner/>
      : null
    return (
      <div className='item-details'>
        {content}
        {err}
      </div>

    )
  }
}