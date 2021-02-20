import React,{Component} from 'react';
import Row from '../row/row';
import {PersonList,PersonDetails} from '../sw-components';
import ErrorBoundry from '../error-boundry/error-boundry';

export default class PeoplePage extends Component{
  state={
    itemId:5
  }
  onItemSelected = (id) => {
    return this.setState({itemId: id})
  }
  render(){
    return <ErrorBoundry>
              <Row  left={<PersonList onItemSelected={this.onItemSelected}/>}
                    right={< PersonDetails itemId = {this.state.itemId}/>}/>
          </ErrorBoundry>

  }
}


