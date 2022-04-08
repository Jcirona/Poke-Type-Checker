import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import CheckTypeEffect from './TypeData'
function PokeSearch() {
    const [pokeName, setPokemonName] = useState('')
    const [pokeImg, setPokemonImg] = useState('')
    const [pokeTypeOne, setPokemonTypeOne] = useState('')
    const [pokeTypeTwo, setPokemonTypeTwo] = useState('')
    const [notEffective, setNotEffective] = useState([])
    let pokemonReference = React.createRef()
  
    let TypeSearch = async (event) => {
        event.preventDefault()
        let typeSlotTwo
        const userInput = pokemonReference.current.value
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
        const pokemonName = pokeData.data.name
        const typeSlotOne = pokeData.data.types[0].type.name
        console.log(pokemonName, "clicked")
        pokeData.data.types[1] == undefined? typeSlotTwo = null: typeSlotTwo = pokeData.data.types[1].type.name
    
        const pokemonImg = pokeData.data.sprites.other["official-artwork"].front_default
        setPokemonName(pokemonName)
        setPokemonImg(pokemonImg)
        setPokemonTypeOne(typeSlotOne)
        setPokemonTypeTwo(typeSlotTwo)
        let notEffective = CheckTypeEffect(typeSlotOne, typeSlotTwo).notEffective
        // console.log(mergedTypeEffects)
        setNotEffective(notEffective)
        console.log(notEffective)
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
            {/* <p>1/4 Damage: {doThething.doubleNotEffective}</p>
            <p>4x Damage: {doThething.doubleSuperEffective}</p>
            <p>No Effect: {doThething.noEffect}</p> */}
            <section>1/2 Damage:
            {notEffective.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>
            {/* <p>2x Damage: {doThething.superEffective}</p> */}
        </div>
        </>
    )
    
}



export default PokeSearch