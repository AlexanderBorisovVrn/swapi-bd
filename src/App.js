import React, {Component} from 'react';
import './app.css';
import Header from './components/header/header';
import SwapiService from './components/Swapi-Service/SwapiService';
import RandomPlanet from './components/random-planet/random-planet';
import ItemDetails from './components/item-details/item-details'
import ItemList from './components/item-list/item-list';
import Row from './components/row/row'

export default class App extends Component {
  state = {
    itemId: 11
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }

  swapiService = new SwapiService();

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onItemSelected} getItem={this.swapiService.getAllPeople}>
        {(i) => `${i.name} ( ${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (<ItemDetails itemId={this.state.itemId}/>)

    return (
      <div className='app'>
        <Header/>
        <RandomPlanet/>
        <Row left={itemList} right={personDetails}/>
      </div>
    )
  }
}