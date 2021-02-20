import React,{Component} from 'react';
import Row from '../row/row';
import {StarshipList,StarshipDetails} from '../sw-components';
import ErrorBoundry from '../error-boundry/error-boundry';

export default class StarshipPage extends Component{
  state={
    itemId:9
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }
  render(){
    return  <ErrorBoundry>
              <Row  left={<StarshipList onItemSelected={this.onItemSelected}/>}
                    right={<StarshipDetails itemId = {this.state.itemId}/>}/>
            </ErrorBoundry>

  }
}