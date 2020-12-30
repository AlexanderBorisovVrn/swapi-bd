import React,{Component} from 'react';
import './error-button.css'

export default class ErrorButton extends Component{
 state={
   errorRender:false
 }
render(){
  if(this.state.errorRender){
    this.foo.bar=0
  }
  return(
    <button type='button' className="but" onClick={()=>this.setState({errorRender:true})}>ErrorButton</button>
  )
}

}
