import SwapiService from '../Swapi-Service/SwapiService';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/hoc-with-data'

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanet, getAllStarships} = swapiService;


const PersonList = withData(ItemList, getAllPeople)
const StarshipList = withData(ItemList, getAllPlanet);
const PlanetList = withData(ItemList, getAllStarships);

export { PersonList,StarshipList,PlanetList};