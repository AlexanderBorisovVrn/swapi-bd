import React, {Component} from 'react';
import './app.css';
import Header from './components/header/header';
import SwapiService from './components/Swapi-Service/SwapiService';
import RandomPlanet from './components/random-planet/random-planet';
import ItemDetails, {Record} from './components/item-details/item-details'
import ItemList from './components/item-list/item-list';
import Row from './components/row/row'

export default class App extends Component {
  state = {
    itemId: 13
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }

  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getAllPeople,
      getPersonUrl,
      getAllStarships,
      getStarshipUrl,
      getStarship
    } = this.swapiService;
    const personList = (
      <ItemList onItemSelected={this.onItemSelected} getData={getAllPeople}>
        {(i) => `${i.name} ( ${i.birthYear})`}
      </ItemList>
    );
    const starshipsList = (
      <ItemList onItemSelected={this.onItemSelected} getData={getAllStarships}>
        {(i) => `${i.name} ( ${i.model})`}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails
        itemId={this.state.itemId}
        getData={getPerson}
        getImageUrl={getPersonUrl}>
        <Record field='gender' label='Gender'/>
        <Record field='birthYear' label='Birth Year'/>
        <Record field='eyeColor' label='Eye color'/>
      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails
        itemId={this.state.itemId}
        getData={getStarship}
        getImageUrl={getStarshipUrl}>
        <Record field='model' label='Model'/>
        <Record field='manufacturer' label='Manufacturerr'/>
        <Record field='costInCredits' label='Cost In Credits'/>
        <Record field='crew' label='Crew'/>
      </ItemDetails>
    )

    return (
      <div className='app'>
        <Header/>
        <RandomPlanet/>
        <Row left={personDetails} right={starshipDetails}/>
      </div>
    )
  }
}