import React, {Component} from 'react';
import SwapiService from '../Swapi-Service/SwapiService';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorView from '../error/error'
import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  componentDidMount(){
    this.updatePlanet();
    setInterval(this.updatePlanet,4000)
  }
  state = {
    planet: {},
    loading: true,
    error:false
  }
  onPlanetLoaded = (planet) => this.setState({planet, loading: false});
  onError = (er)=>this.setState({error:true})
  updatePlanet = ()=>{
    const id = Math.floor(Math.random()*25)+3;
    this
      .swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
    }
  render() {
    let {planet, loading, error} = this.state;

    const spinner = (loading && !error)? <Spinner/>: null;
    const content = !(loading || error)? <PlanetView planet={planet}/>: null;
    const catchError =  error?<ErrorView/>:null;
    
    return (
      <div className='random-planet'>
        {spinner}
        <ErrorBoundry>
        {content}
        </ErrorBoundry>
        {catchError}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population, diameter, rotation} = planet;
  return (
    <React.Fragment>
      <img
        className='planet-img'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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


