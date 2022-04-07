import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import CheckTypeEffect from './TypeData'
function PokeSearch() {
    const [pokeName, setPokemonName] = useState('')
    const [pokeImg, setPokemonImg] = useState('')
    const [pokeTypeOne, setPokemonTypeOne] = useState('')
    const [pokeTypeTwo, setPokemonTypeTwo] = useState('')
    const [doTheThing, setDoTheThing] = useState([])
    let pokemonReference = React.createRef()
  
    let TypeSearch = async (event) => {
        event.preventDefault()
        let typeSlotTwo
        const userInput = pokemonReference.current.value
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
        const pokemonName = pokeData.data.name
        const typeSlotOne = pokeData.data.types[0].type.name
        pokeData.data.types[1] == undefined? typeSlotTwo = null: typeSlotTwo = pokeData.data.types[1].type.name
    
        const pokemonImg = pokeData.data.sprites.other["official-artwork"].front_default
        setPokemonName(pokemonName)
        setPokemonImg(pokemonImg)
        setPokemonTypeOne(typeSlotOne)
        setPokemonTypeTwo(typeSlotTwo)
        // change variable name
        // console.log(CheckTypeEffect(typeSlotOne, typeSlotTwo))
        // console.log(typeSlotOne)
        setDoTheThing(CheckTypeEffect(typeSlotOne, typeSlotTwo))
    }

    return (
        <>
        <form action="">
            <label htmlFor="">Search: </label>
            <input type="text" className="search-bar" ref={pokemonReference}/>
            <button onClick={TypeSearch}>Search</button>
        </form>
        <div className="results">
            <p>{pokeName}</p>
            <p>{pokeTypeOne}</p>
            <p>{pokeTypeTwo}</p>
            <img src={pokeImg} alt="" />
        </div>
        <div>
            {console.log(doTheThing.notEffective)}

            {/* {doTheThing["notEffective"].map(effect => (
                <p>{effect}</p>
            ))} */}
        </div>
        </>
    )
    
}



export default PokeSearch