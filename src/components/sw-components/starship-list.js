import ItemList from '../item-list/item-list';
import {withData,withSwapiService,withChildFunction,compose} from '../hoc-helpers';

const mapMethodsToProps=(swapiService)=>{
return {getData:swapiService.getAllStarships}
}

 export default compose(
withSwapiService(mapMethodsToProps),
    withData,
      withChildFunction
)(ItemList)