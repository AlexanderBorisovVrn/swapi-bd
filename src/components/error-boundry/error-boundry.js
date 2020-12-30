import React,{Component}from 'react';
import Error from '../error/error'

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({hasError: true})

  }
  render() {

    if (this.state.hasError) {
      return (
        <div className='person-details'>
          <Error/>
        </div>
      )
    }
    return this.props.children;
  }
}