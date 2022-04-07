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
        console.log(doTheThing)
    }

    return (
        <>
        <form action="">
            <label htmlFor="">Search: </label>
            <input type="text" className="search-bar" ref={pokemonReference}/>
            <button onClick={TypeSearch}>Search</button>
        </form>
        <div className="results">
            <p>Name: {pokeName}</p>
            <p>First Type: {pokeTypeOne}</p>
            <p>Second Type: {pokeTypeTwo}</p>
            <img src={pokeImg} alt="" />
        </div>
        <div>
            <p>1/4 Damage: {doTheThing.doubleNotEffective}</p>
            <p>4x Damage: {doTheThing.doubleSuperEffective}</p>
            <p>No Effect: {doTheThing.noEffect}</p>
            <p>1/2 Damage: {doTheThing.notEffective}</p>
            <p>2x Damage: {doTheThing.superEffective}</p>
        
            
            
            
            

            {/* {doTheThing["notEffective"].map(effect => (
                <p>{effect}</p>
            ))} */}
        </div>
        </>
    )
    
}



export default PokeSearch