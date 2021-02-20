import {withDetails,withSwapiService } from '../hoc-helpers';
import ItemDetails from '../item-details/item-details';

const detailsFields = [
  {
    field: 'name',
    label: 'Name'
  }, {
    field: 'population',
    label: 'Population'
  }, {
    field: 'diameter',
    label: 'Diameter'
  }
]

const mapMethodsToProps = (swapiService) => {
  return {getItem: swapiService.getPlanet, getItemImgUrl: swapiService.getPlanetsImgUrl}
}

export default withSwapiService(mapMethodsToProps)(withDetails(ItemDetails)(detailsFields));
