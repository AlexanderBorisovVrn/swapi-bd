import React, {Component} from 'react';
import SwapiService from '../Swapi-Service/SwapiService'
import './item-details.css'
import Spinner from '../spinner/spinner';


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: {},
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }
  onLoading = item => this.setState({item, loading: false});
  onError = err => this.setState({error: true})
  updatePerson = () => {
    const itemId = this.props.itemId;

    if (!itemId) {
      return
    }
    this
      .swapiService
      .getPerson(itemId)
      .then(this.onLoading)
      .catch(this.onError)
  }
  componentDidUpdate(prevprops) {
    if (this.props.itemId != prevprops.itemId) {
      this.setState({loading:true})
      this.updatePerson();
    }
  }

  
  render() {
  
    const returnDetails = () => {
      let {name, birthYear, eyeColor, gender, id} = this.state.item;
      return (
        <React.Fragment>
          <div className='wrap'>
            <img
              className='img'
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            <div className='item-list-group'>
              <h1>{name}</h1>
              <ul className='item-details-list'>
                <li className='item-details-item'>Gender {gender}</li>
                <li className='item-details-item'>Eyecolor {eyeColor}</li>
                <li className='item-details-item'>Birthyear {birthYear}</li>
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