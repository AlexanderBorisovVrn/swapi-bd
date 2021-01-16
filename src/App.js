import React, {Component} from 'react';
import './app.css';
import Header from './components/header/header';
import ItemDetails from './components/hoc-helpers/hoc-with-details'
import { PersonList,StarshipList,PlanetList} from './components/sw-components/lists';


export default class App extends Component {
  state = {
    itemId: 5,
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})}

  render() {
       
    return (
      <div className='app'>
        <Header/>
        <ItemDetails itemId={this.state.itemId}/>
        <PersonList onItemSelected={this.onItemSelected}/>
       </div>
    )
  }
}