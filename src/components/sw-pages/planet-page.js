import React,{Component} from 'react';
import Row from '../row/row';
import {PlanetList,PlanetDetails} from '../sw-components';
import ErrorBoundry from '../error-boundry/error-boundry';

export default class PlanetPage extends Component{
  state={
    itemId:5
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }
  render(){
    return <ErrorBoundry>
              <Row  left={<PlanetList onItemSelected={this.onItemSelected}/>}
                     right={<PlanetDetails itemId = {this.state.itemId}/>}/>
           </ErrorBoundry>
  
  }
}
