export default class SwapiService {
  __apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    let response = await fetch(`${this.__apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${response.status}`)
    }
    return await response.json()
  }

  getAllPeople= async ()=>{
    const res = await this.getResource(`/people/`);
    return res
      .results
      .map(this._transformPerson)
  }
 getPerson= async (id)=>{
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanet= async ()=>{
    const res = await this.getResource('/planets/')
    return res
      .results
      .map(this._transformPlanet)
  
  }
   getPlanet=async (id)=>{
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

   getAllStarships = async()=>{
    const res = await this.getResource('/starships/')
    return res
      .results
      .map(this._transformStarship)
  }
  getStarship=async (id)=>{
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  extractId(item) {
    const regExp = /\/([0-9]*)\/$/;
    const id = item
      .url
      .match(regExp)[1];
    return id;
  }

  _transformPlanet=(planet)=>{
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotation: planet.rotation_period
    }
  }

  _transformPerson = (person)=>{
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
  _transformStarship=(starship)=>{
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      lenght:starship.lenght,
      crew:starship.crew,
      passenger:starship.passenger,
      cargoCapasity:starship.cargo_capacity
    }
  }
}

