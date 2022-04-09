import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import CheckTypeEffect from './TypeData'
function PokeSearch() {
    const [pokeName, setPokemonName] = useState('')
    const [pokeImg, setPokemonImg] = useState('')
    const [pokeTypeOne, setPokemonTypeOne] = useState('')
    const [pokeTypeTwo, setPokemonTypeTwo] = useState('')
    const [allTypeEffects, setAllTypeEffects] = useState([])
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
        let allTypeEffects = CheckTypeEffect(typeSlotOne, typeSlotTwo)
        setAllTypeEffects(allTypeEffects)
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
            <section className="no-effect">No Damage from: 
                {allTypeEffects.noEffect && allTypeEffects.noEffect.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>

            <section className="double-not-effective">1/4 Damage: 
                {allTypeEffects.doubleNotEffective && allTypeEffects.doubleNotEffective.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>

            <section className="not-effective">1/2 Damage:
            {allTypeEffects.notEffective && allTypeEffects.notEffective.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>

            <section className="super-effective">2x Damage: 
                {allTypeEffects.superEffective && allTypeEffects.superEffective.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>

            <section className="double-super-effective">4x Damage: 
                {allTypeEffects.doubleSuperEffective && allTypeEffects.doubleSuperEffective.map((effect, i) => (
                <p key={i}>{effect}</p>
            ))}</section>


        </div>
        </>
    )
    
}



export default PokeSearch