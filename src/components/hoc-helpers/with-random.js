import {Component} from 'react'
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorView from '../error/error';
import PropTypes from'prop-types'
import '../random-item/random-item.css'

const withRandom = (Wrapped) => {
  return class extends Component{
    state = {
      planet: {},
      loading: true,
      error:false
    }
  static defaultProps ={updateInterval:3000};
    componentDidMount(){
      const {updateInterval} = this.props;
       this.updatePlanet();
      setInterval(this.updatePlanet,updateInterval)
    }
  static propTypes = {
    updateInterval: PropTypes.number,
    methods:PropTypes.objectOf(PropTypes.func)
  }
    onItemLoaded = (planet) => this.setState({planet, loading: false});
    onError = (err)=>this.setState({error:true})
    updatePlanet = ()=>{
      const {getItem}=this.props.methods;
      const id = Math.floor(Math.random()*9)+1;
      getItem(id)
        .then(this.onItemLoaded)
        .catch(this.onError)
      }
    render() {
      let {planet, loading, error} = this.state;
  
      const spinner = (loading && !error)? <Spinner/>: null;
      const content = !(loading || error)? <Wrapped planet={planet} {...this.props}/>: null;
      const catchError =  error?<ErrorView/>:null;
      
      return (
        <div className='random-item'>
          {spinner}
          <ErrorBoundry>
          {content}
          </ErrorBoundry>
          {catchError}
        </div>
      )
    }
  }
}


export default withRandom;