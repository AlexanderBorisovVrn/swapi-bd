import React, {Component} from 'react';
import './app.css';
import Header from './components/header/header';
import RandomPlanet from './components/sw-pages/random-page'
import {SwapiService, DummySwapiService} from './components/Swapi-Service';
import {SwapiServiceProvider} from './components/swapi-context/swapi-context';
import ErrorBoundry from './components/error-boundry/error-boundry';
import {PeoplePage, PlanetPage, StarshipPage} from './components/sw-pages';

export default class App extends Component {
  state = {
    currentService: new SwapiService()
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }

  changeService = () => {
    this.setState(({currentService}) => {
      const Service = currentService instanceof SwapiService
        ? DummySwapiService
        : SwapiService;
      return {currentService: new Service()}
    })
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.currentService}>
          <div className='app'>
            <Header changeService={this.changeService}/>
            <RandomPlanet updateInterval={1000}/>
            <PeoplePage/>
            <PlanetPage/>
            <StarshipPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}