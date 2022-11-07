import axios from "axios";
import { PokemonDetail } from '../PokemonDetail'
import { getPokemonDetails } from "./getPokemonDetail";

export interface PokemonListInterface {
  name:string;
  url: string
}

interface ListPokemonInterface {
  count: number;
  next: null | string;
  previus: null | string;
  results: PokemonDetail[]
}

export async function ListPokemon (): Promise<ListPokemonInterface>{
  const endPoint = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  const response = await axios.get<ListPokemonInterface>(endPoint);

  const promiseArr = response.data.results.map(async (pokemon)=>getPokemonDetails(pokemon.name))
  const resultsPromise = await Promise.all(promiseArr)

  return{ 
    ...response.data,
  results: resultsPromise,
  }
}