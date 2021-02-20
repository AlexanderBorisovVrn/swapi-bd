import {Component} from 'react';

const data = {
  people: [
    {
      "name": "Mikle Owen [Test Data]",
      "height": "178",
      "mass": "120",
      "hair_color": "brown, grey",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "52BBY",
      "gender": "male",
      "id": "1"
    }, {
      "name": "Pirs Brosnan [Test Data]",
      "height": "165",
      "mass": "75",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "47BBY",
      "gender": "female",
      "id": "2"
    }, {
      "name": "RocketMan [Test Data]",
      "height": "97",
      "mass": "32",
      "hair_color": "n/a",
      "skin_color": "white, red",
      "eye_color": "red",
      "birth_year": "unknown",
      "gender": "n/a",
      "id": "3"
    }, {
      "name": "Pussy Riots [Test Data]",
      "height": "183",
      "mass": "84",
      "hair_color": "black",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "24BBY",
      "id": "4"
    }, {
      "name": "Jing  [Test Data]",
      "height": "188",
      "mass": "112",
      "hair_color": "yellow, grey",
      "skin_color": "red",
      "eye_color": "green",
      "birth_year": "1985",
      "gender": "male",
      "id": "6"
    }, {
      "name": "Bells  [Test Data]",
      "height": "188",
      "mass": "112",
      "hair_color": "yellow, grey",
      "skin_color": "red",
      "eye_color": "green",
      "birth_year": "1985",
      "gender": "male",
      "id": "7"
    }, {
      "name": "Fry  [Test Data]",
      "height": "188",
      "mass": "112",
      "hair_color": "yellow, grey",
      "skin_color": "red",
      "eye_color": "green",
      "birth_year": "1985",
      "gender": "male",
      "id": "8"
    }, {
      "name": "Lila [Test Data]",
      "height": "188",
      "mass": "112",
      "hair_color": "yellow, grey",
      "skin_color": "red",
      "eye_color": "green",
      "birth_year": "1985",
      "gender": "male",
      "id": "9"
    }, {
      "name": "Valee[Test Data]",
      "height": "188",
      "mass": "112",
      "hair_color": "yellow, grey",
      "skin_color": "red",
      "eye_color": "green",
      "birth_year": "1985",
      "gender": "male",
      "id": "5"
    }
  ],
  planets: [
    {
      "name": "Krakov [TEST DATA]",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "id": "2",
      "residents": [
        "http://swapi.dev/api/people/1/",
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/4/",
        "http://swapi.dev/api/people/6/",
        "http://swapi.dev/api/people/7/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/9/",
        "http://swapi.dev/api/people/11/",
        "http://swapi.dev/api/people/43/",
        "http://swapi.dev/api/people/62/"
      ],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T20:58:18.411000Z",
      "url": "http://swapi.dev/api/planets/1/"
    }, {
      "name": "Viazma [TEST DATA]",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "id": "1",
      "residents": [
        "http://swapi.dev/api/people/5/", "http://swapi.dev/api/people/68/", "http://swapi.dev/api/people/81/"
      ],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "http://swapi.dev/api/planets/2/"
    }, {
      "name": "Voronezh [TEST DATA]",
      "rotation_period": "24",
      "orbital_period": "4818",
      "diameter": "10200",
      "climate": "temperate, tropical",
      "gravity": "1 standard",
      "terrain": "jungle, rainforests",
      "surface_water": "8",
      "id": "3",
      "population": "1000",
      "residents": [],
      "films": ["http://swapi.dev/api/films/1/"],
      "created": "2014-12-10T11:37:19.144000Z",
      "edited": "2014-12-20T20:58:18.421000Z",
      "url": "http://swapi.dev/api/planets/3/"
    }, {
      "name": "Harkhov [TEST DATA]",
      "rotation_period": "23",
      "orbital_period": "549",
      "diameter": "7200",
      "climate": "frozen",
      "gravity": "1.1 standard",
      "terrain": "tundra, ice caves, mountain ranges",
      "surface_water": "100",
      "population": "unknown",
      "residents": [],
      "id": "4",
      "films": ["http://swapi.dev/api/films/2/"],
      "created": "2014-12-10T11:39:13.934000Z",
      "edited": "2014-12-20T20:58:18.423000Z",
      "url": "http://swapi.dev/api/planets/4/"
    }, {
      "name": "Dagobah [TEST DATA]",
      "rotation_period": "23",
      "orbital_period": "341",
      "diameter": "8900",
      "climate": "murky",
      "gravity": "N/A",
      "terrain": "swamp, jungles",
      "id": "5",
      "surface_water": "8",
      "population": "unknown",
      "residents": [],
      "films": [
        "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:42:22.590000Z",
      "edited": "2014-12-20T20:58:18.425000Z",
      "url": "http://swapi.dev/api/planets/5/"
    }, {
      "name": "kLAAS [TEST DATA]",
      "rotation_period": "12",
      "orbital_period": "5110",
      "diameter": "118000",
      "climate": "temperate",
      "gravity": "1.5 (surface), 1 standard (Cloud City)",
      "terrain": "gas giant",
      "surface_water": "0",
      "id": "6",
      "population": "6000000",
      "residents": ["http://swapi.dev/api/people/26/"],
      "films": ["http://swapi.dev/api/films/2/"],
      "created": "2014-12-10T11:43:55.240000Z",
      "edited": "2014-12-20T20:58:18.427000Z",
      "url": "http://swapi.dev/api/planets/6/"
    }, {
      "name": "Irdivan [TEST DATA]",
      "rotation_period": "18",
      "orbital_period": "402",
      "diameter": "4900",
      "climate": "temperate",
      "gravity": "0.85 standard",
      "terrain": "forests, mountains, lakes",
      "surface_water": "8",
      "id": "7",
      "population": "30000000",
      "residents": ["http://swapi.dev/api/people/30/"],
      "films": ["http://swapi.dev/api/films/3/"],
      "created": "2014-12-10T11:50:29.349000Z",
      "edited": "2014-12-20T20:58:18.429000Z",
      "url": "http://swapi.dev/api/planets/7/"
    }, {
      "name": "Naboo [TEST DATA]",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "id": "8",
      "population": "4500000000",
      "residents": [
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/21/",
        "http://swapi.dev/api/people/35/",
        "http://swapi.dev/api/people/36/",
        "http://swapi.dev/api/people/37/",
        "http://swapi.dev/api/people/38/",
        "http://swapi.dev/api/people/39/",
        "http://swapi.dev/api/people/42/",
        "http://swapi.dev/api/people/60/",
        "http://swapi.dev/api/people/61/",
        "http://swapi.dev/api/people/66/"
      ],
      "films": [
        "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "http://swapi.dev/api/planets/8/"
    }, {
      "name": "Coruscant [TEST DATA]",
      "rotation_period": "24",
      "orbital_period": "368",
      "diameter": "12240",
      "climate": "temperate",
      "gravity": "1 standard",
      "id": "9",
      "terrain": "cityscape, mountains",
      "surface_water": "unknown",
      "population": "1000000000000",
      "residents": [
        "http://swapi.dev/api/people/34/", "http://swapi.dev/api/people/55/", "http://swapi.dev/api/people/74/"
      ],
      "films": [
        "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:54:13.921000Z",
      "edited": "2014-12-20T20:58:18.432000Z",
      "url": "http://swapi.dev/api/planets/9/"
    }, {
      "name": "Kamino [TEST DATA]",
      "rotation_period": "27",
      "orbital_period": "463",
      "diameter": "19720",
      "climate": "temperate",
      "gravity": "1 standard",
      "id": "10",
      "terrain": "ocean",
      "surface_water": "100",
      "population": "1000000000"
    }
  ],
  starships: [
    {
      "name": "VAZ 2109",
      "model": "CR90 corvette",
      "manufacturer": "Corellian Engineering Corporation",
      "cost_in_credits": "3500000",
      "length": "150",
      "max_atmosphering_speed": "950",
      "crew": "30-165",
      "passengers": "600",
      "cargo_capacity": "3000000",
      "consumables": "1 year",
      "id": "1",
      "hyperdrive_rating": "2.0",
      "MGLT": "60",
      "starship_class": "corvette",
      "pilots": [],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T14:20:33.369000Z",
      "edited": "2014-12-20T21:23:49.867000Z",
      "url": "http://swapi.dev/api/starships/2/"
    }, {
      "name": "Honda [TEST DATA]",
      "model": "Imperial I-class Star Destroyer",
      "manufacturer": "Kuat Drive Yards",
      "cost_in_credits": "150000000",
      "length": "1,600",
      "max_atmosphering_speed": "975",
      "crew": "47,060",
      "id": "2",
      "passengers": "n/a",
      "cargo_capacity": "36000000",
      "consumables": "2 years",
      "hyperdrive_rating": "2.0",
      "MGLT": "60",
      "starship_class": "Star Destroyer",
      "pilots": [],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T15:08:19.848000Z",
      "edited": "2014-12-20T21:23:49.870000Z",
      "url": "http://swapi.dev/api/starships/3/"
    }, {
      "name": "Volvo [TEST DATA]",
      "model": "Sentinel-class landing craft",
      "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
      "cost_in_credits": "240000",
      "length": "38",
      "max_atmosphering_speed": "1000",
      "crew": "5",
      "id": "3",
      "passengers": "75",
      "cargo_capacity": "180000",
      "consumables": "1 month",
      "hyperdrive_rating": "1.0",
      "MGLT": "70",
      "starship_class": "landing craft",
      "pilots": [],
      "films": ["http://swapi.dev/api/films/1/"],
      "created": "2014-12-10T15:48:00.586000Z",
      "edited": "2014-12-20T21:23:49.873000Z",
      "url": "http://swapi.dev/api/starships/5/"
    }, {
      "name": "Giguli [TEST DATA]",
      "model": "DS-1 Orbital Battle Station",
      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      "cost_in_credits": "1000000000000",
      "length": "120000",
      "max_atmosphering_speed": "n/a",
      "crew": "342,953",
      "passengers": "843,342",
      "cargo_capacity": "1000000000000",
      "consumables": "3 years",
      "hyperdrive_rating": "4.0",
      "id": "4",
      "MGLT": "10",
      "starship_class": "Deep Space Mobile Battlestation",
      "pilots": [],
      "films": ["http://swapi.dev/api/films/1/"],
      "created": "2014-12-10T16:36:50.509000Z",
      "edited": "2014-12-20T21:26:24.783000Z",
      "url": "http://swapi.dev/api/starships/9/"
    }, {
      "name": "Hunday [TEST DATA]",
      "model": "YT-1300 light freighter",
      "manufacturer": "Corellian Engineering Corporation",
      "cost_in_credits": "100000",
      "length": "34.37",
      "max_atmosphering_speed": "1050",
      "crew": "4",
      "passengers": "6",
      "cargo_capacity": "100000",
      "id": "5",
      "consumables": "2 months",
      "hyperdrive_rating": "0.5",
      "MGLT": "75",
      "starship_class": "Light freighter",
      "pilots": [
        "http://swapi.dev/api/people/13/", "http://swapi.dev/api/people/14/", "http://swapi.dev/api/people/25/", "http://swapi.dev/api/people/31/"
      ],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T16:59:45.094000Z",
      "edited": "2014-12-20T21:23:49.880000Z",
      "url": "http://swapi.dev/api/starships/10/"
    }, {
      "name": "Volga [TEST DATA]",
      "model": "BTL Y-wing",
      "manufacturer": "Koensayr Manufacturing",
      "cost_in_credits": "134999",
      "length": "14",
      "max_atmosphering_speed": "1000km",
      "crew": "2",
      "passengers": "0",
      "id": "6",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "80",
      "starship_class": "assault starfighter",
      "pilots": [],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-12T11:00:39.817000Z",
      "edited": "2014-12-20T21:23:49.883000Z",
      "url": "http://swapi.dev/api/starships/11/"
    }, {
      "name": "Mazda [TEST DATA]",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "id": "7",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter",
      "pilots": [
        "http://swapi.dev/api/people/1/", "http://swapi.dev/api/people/9/", "http://swapi.dev/api/people/18/", "http://swapi.dev/api/people/19/"
      ],
      "films": [
        "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-20T21:23:49.886000Z",
      "url": "http://swapi.dev/api/starships/12/"
    }, {
      "name": "TIE Advanced x1 [TEST DATA]",
      "model": "Twin Ion Engine Advanced x1",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": "unknown",
      "length": "9.2",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "id": "8",
      "passengers": "0",
      "cargo_capacity": "150",
      "consumables": "5 days",
      "hyperdrive_rating": "1.0",
      "MGLT": "105",
      "starship_class": "Starfighter",
      "pilots": ["http://swapi.dev/api/people/4/"],
      "films": ["http://swapi.dev/api/films/1/"],
      "created": "2014-12-12T11:21:32.991000Z",
      "edited": "2014-12-20T21:23:49.889000Z",
      "url": "http://swapi.dev/api/starships/13/"
    }, {
      "name": "Executor[TEST DATA]",
      "model": "Executor-class star dreadnought",
      "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
      "cost_in_credits": "1143350000",
      "length": "19000",
      "max_atmosphering_speed": "n/a",
      "crew": "279,144",
      "passengers": "38000",
      "id": "9",
      "cargo_capacity": "250000000",
      "consumables": "6 years",
      "hyperdrive_rating": "2.0",
      "MGLT": "40",
      "starship_class": "Star dreadnought",
      "pilots": [],
      "films": [
        "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-15T12:31:42.547000Z",
      "edited": "2014-12-20T21:23:49.893000Z",
      "url": "http://swapi.dev/api/starships/15/"
    }, {
      "name": "Rebel transport[TEST DATA]",
      "model": "GR-75 medium transport",
      "manufacturer": "Gallofree Yards, Inc.",
      "cost_in_credits": "unknown",
      "length": "90",
      "max_atmosphering_speed": "650",
      "crew": "6",
      "id": "10",
      "passengers": "90",
      "cargo_capacity": "19000000",
      "consumables": "6 months",
      "hyperdrive_rating": "4.0",
      "MGLT": "20",
      "starship_class": "Medium transport",
      "pilots": [],
      "films": [
        "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-15T12:34:52.264000Z",
      "edited": "2014-12-20T21:23:49.895000Z",
      "url": "http://swapi.dev/api/starships/17/"
    }
  ]
}

export default class DummySwapiService extends Component {
  extractId = (string) => {
    const regExp = /\/([0-9])\/$/;
    return string.match(regExp)[1];
  }

  imageBank = [
    'https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418__340.jpg',
    'https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg',
    'https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscraper-3184798__340.jpg',
    'https://cdn.pixabay.com/photo/2018/02/15/19/42/sunset-3156176__340.jpg',
    'https://cdn.pixabay.com/photo/2016/02/10/00/07/bench-1190768__340.jpg',
    'https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356__340.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229__340.jpg'
  ]
  getAllPeople = async() => {
    return data
      .people
      .map(el => el)
  }

  getPerson = async(id) => {
    return data
      .people
      .find(el => el.id==  id)
  }

  getAllPlanets = async() => {
    return data
      .planets
      .map(el => el)
  }
  getPlanet = async(id) => {
    return data
      .planets
      .find(el => el.id== id)
  }

  getAllStarships = async() => {
    return data
      .starships
      .map(el => el)
  }
  getStarship = async(id) => {
    return data
      .starships
      .find(el => el.id== id)
  }

  getPersonImgUrl = (id) => {
    return this.imageBank[id]
  }
  getStarshipImgUrl = (id) => {
    return this.imageBank[id]
  }
  getPlanetsImgUrl = (id) => {
    return this.imageBank[id]
  }
}


