import {withRandom,withSwapiService} from '../hoc-helpers';
import RandomItem from '../random-item/random-item';

const mapMethodsToProps = (swapiService) => {
  return {getItem:swapiService.getPlanet,
    getItemImage:swapiService.getPlanetsImgUrl
  }
}



export default withSwapiService(mapMethodsToProps)(withRandom(RandomItem))