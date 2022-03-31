import Navbar from './components/Navbar'
import Input from './components/Input'
import Card from './components/Card'

const Pokemon = async ({ pokemon }) => {
  //const id = pokemon.url.split('/').filter(x => x).pop()
  const respose = await fetch(`${pokemon.url}`)
  const data = await respose.json()
  return (data.results)
}
export default function Pokemones({ pokemones }) {
  console.log({pokemones})
  return (
    <>
      <Navbar>
        <Input></Input>
      </Navbar>
      <div>
          {pokemones.map(pokemon => <Card key={pokemon.name} pokemon={pokemon} />)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const apiPokemon = (numero) =>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(respose => respose.json())
    .then(data => data)
  }
  let pokemonesAllData = []
  for (let index = 1; index <= 151 ; index++) {
    let data =  await apiPokemon(index)
    pokemonesAllData.push(data)
  }
  let pokemones = pokemonesAllData.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types
    }
  })
  return {
    props: { pokemones }
  }
}