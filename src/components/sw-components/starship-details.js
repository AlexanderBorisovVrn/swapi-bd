import {withDetails,withSwapiService} from '../hoc-helpers/';
import ItemDetails from '../item-details/item-details';

const detailsFields =
   [
    {
      field: 'name',
      label: 'Name'
    }, {
      field: 'model',
      label: 'Model'
    }, {
      field: 'manufacturer',
      label: 'Manufacturer'
    },
    { field: 'costInCredits',
    label: 'Cost in credits'}
  ]

const mapMethodsToProps = (swapiService)=>{
  return {
   getItem:swapiService.getStarship,
   getItemImgUrl:swapiService.getStarshipImgUrl
  }
}


export default  withSwapiService(mapMethodsToProps)(withDetails(ItemDetails)(detailsFields));
