import {SwapiServiceConsumer} from '../swapi-context/swapi-context'

const withSwapiService = ( mapMethodsToProps)=>(Wrapped) => {
  return (props) => {
    return <SwapiServiceConsumer >
      {(swapiService) => {
        const methods = mapMethodsToProps(swapiService)
        return <Wrapped {...props} methods={methods}/>
       }
}
    </SwapiServiceConsumer>
  }
}

export default withSwapiService;