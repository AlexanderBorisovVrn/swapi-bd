import ItemDetails from '../item-details/item-details';
import {withSwapiService, withDetails} from '../hoc-helpers/'

const detailsFields = [
  {
    field: 'name',
    label: 'Name'
  }, {
    field: 'birthYear',
    label: 'Birth year'
  }, {
    field: 'eyeColor',
    label: 'Eye color'
  }
]

const mapMethodsToProps = (swapiService) => {
  return {getItem: swapiService.getPerson, getItemImgUrl: swapiService.getPersonImgUrl}
}

export default withSwapiService(mapMethodsToProps)(withDetails(ItemDetails)(detailsFields));
