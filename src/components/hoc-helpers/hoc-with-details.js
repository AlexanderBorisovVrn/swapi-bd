import React, {Component} from 'react';
import SwapiService from '../Swapi-Service/SwapiService';
import ItemDetails, {Record} from '../item-details/item-details'
import '../item-details/item-details.css'
import Spinner from '../spinner/spinner';


const viewData = (View,itemId) => {
  
const swapiService = new SwapiService();
const {getPerson, getPersonUrl} = swapiService;
  return class extends Component {
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
      const {itemId} = this.props;
       if (!itemId) {
        return
      }

      getPerson(itemId).then(item => {
     return this.setState({item, loading: false, image: getPersonUrl(itemId)})
      }).catch(this.onError)
    }
    componentDidUpdate(prevprops) {
      if (this.props.itemId != prevprops.itemId) {
        this.setState({loading: true})
        this.updateItem();
      }
    }
    render() {
      const {loading, error, item, image} = this.state
      const content = (!loading && !error)
        ? <ItemDetails item={item} image={image}>
            <Record field='name' label='Name' item={item}/>
            <Record field='birthYear' label='Birth year' item={item}/>
            <Record field='eyeColor' label='Eye color' item={item}/>
          </ItemDetails>
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
}

export default viewData(ItemDetails)