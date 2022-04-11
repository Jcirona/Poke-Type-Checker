const typeData = {
    "normal": {
        "noEffect": ["ghost"],
        "notEffective": [],
        "superEffective": ["fighting"]
    },
    "fire": {
        "noEffect": [],
        "notEffective": ["fire", "grass", "ice", "steel", "fairy", "bug"],
        "superEffective": ["water", "ground", "rock"]
    },
    "water": {
        "noEffect": [],
        "notEffective": ["fire", "water", "ice", "steel"],
        "superEffective": ["grass", "electric"]
    },
    "grass": {
        "noEffect": [],
        "notEffective": ["water", "grass", "electric", "ground"],
        "superEffective": ["fire", "ice", "poison", "flying", "bug"]
    },
    "electric": {
        "noEffect": [],
        "notEffective": ["electric", "flying", "steel"],
        "superEffective": ["ground"]
    },
    "ice": {
        "noEffect": [],
        "notEffective": ["ice"],
        "superEffective": ["fire", "fighting", "rock", "steel"]
    },
    "fighting": {
        "noEffect": [],
        "notEffective": ["bug", "rock", "dark"],
        "superEffective": ["flying", "psychic", "fairy"]
    },
    "poison": {
        "noEffect": [],
        "notEffective": ["grass", "fighting", "poison", "bug", "fairy"],
        "superEffective": ["ground", "psychic"]
    },
    "ground": {
        "noEffect": ["electric"],
        "notEffective": ["poison", "rock"],
        "superEffective": ["water", "grass", "ice"]
    },
    "flying": {
        "noEffect": ["ground"],
        "notEffective": ["grass", "fighting", "bug"],
        "superEffective": ["electric", "ice", "rock"]
    },
    "psychic": {
        "noEffect": [],
        "notEffective": ["fighting", "psychic"],
        "superEffective": ["bug", "dark", "ghost"]
    },
    "bug": {
        "noEffect": [],
        "notEffective": ["grass", "fighting", "ground"],
        "superEffective": ["fire", "flying", "rock"]
    },
    "rock": {
        "noEffect": [],
        "notEffective": ["normal", "fire", "poison", "flying"],
        "superEffective": ["water", "grass", "fighting", "ground", "steel"]
    },
    "ghost": {
        "noEffect": ["normal", "fighting"],
        "notEffective": ["poison", "bug"],
        "superEffective": ["ghost", "dark"]
    },
    "dragon": {
        "noEffect": [],
        "notEffective": ["fire", "water", "grass", "electric"],
        "superEffective": ["ice", "dragon", "fairy"]
    },
    "dark": {
        "noEffect": ["psychic"],
        "notEffective": ["ghost", "dark"],
        "superEffective": ["fighting", "bug", "fairy"]
    },
    "steel": {
        "noEffect": ["poison"],
        "notEffective": ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
        "superEffective": ["fire", "fighting", "ground"]
    },
    "fairy": {
        "noEffect": ["dragon"],
        "notEffective": ["fighting", "bug", "dark"],
        "superEffective": ["poison", "steel"]
    }
}

function CheckTypeEffect(typeOne, typeTwo = null) {
    
    // This check will determine if there's no second argument passed in to just return the first type data
    if (!typeData[typeTwo]) {
        return typeData[typeOne]
    } if (typeData[typeTwo]) {
    let firstType = typeData[typeOne]
    let secondType = typeData[typeTwo]
    // Using deconstruction to create our objects with array values
        var { noEffect: noEffect1, notEffective: notEffective1, superEffective: superEffective1 } = firstType
        var { noEffect: noEffect2, notEffective: notEffective2, superEffective: superEffective2 } = secondType
        // Merging our two objects together and concatenating their arrays - There will be duplicate elements after this merging
        let mergedTypeEffects = {
            noEffect: noEffect1.concat(noEffect2).sort(),
            notEffective: notEffective1.concat(notEffective2).sort(),
            superEffective: superEffective1.concat(superEffective2).sort()
        }
        console.log(mergedTypeEffects, 'initial merge')
        // These initial filters check through the selected arrays and create new arrays with any duplicates filtered out - the filtered array is then assigned to a variable
        let filteredNotEffectiveArray = mergedTypeEffects.notEffective
            .filter((type, index) => index === mergedTypeEffects.notEffective
            .indexOf(type))
            .sort()

        let filteredSuperEffectiveArray = mergedTypeEffects.superEffective
            .filter((type, index) => index === mergedTypeEffects.superEffective
            .indexOf(type))
            .sort()        

        // These filters check through the selected arrays for duplicate types in a single given array. Every duplicate type is added to the new array and it gets stored in a variable arranged in alphabetical order.
        let doubleNotEffectiveArray = mergedTypeEffects.notEffective
            .filter((type, index) => index !== mergedTypeEffects.notEffective.indexOf(type)).sort()
        let doubleSuperEffectiveArray = mergedTypeEffects.superEffective
            .filter((type, index) => index !== mergedTypeEffects.superEffective.indexOf(type)).sort()

        // These filters check across two seperate arrays to check for identical types. In this instance if a type is present in both not effective and super effective it is considered neutral damage and is removed from the arrays.        
        let neutralFilteredNotEffective = filteredNotEffectiveArray
            .filter(type => !mergedTypeEffects.superEffective
            .includes(type))
        let neutralFilteredSuperEffective = filteredSuperEffectiveArray
            .filter(type => !mergedTypeEffects.notEffective
            .includes(type))

        // These last filters remove any type from not effective and super effective that were allocated to double not effective or double super effective.
        let finalSuperEffectiveFilter = neutralFilteredSuperEffective
            .filter(type => !doubleSuperEffectiveArray
            .includes(type))

        let finalNotEffectiveFilter = neutralFilteredNotEffective
            .filter(type => !doubleNotEffectiveArray
            .includes(type))
        

        // This block of code is us reassigning existing keys with our filtered arrays and creating new keys for double not/super effective arrays
        mergedTypeEffects.doubleNotEffective = doubleNotEffectiveArray
        mergedTypeEffects.doubleSuperEffective = doubleSuperEffectiveArray
        mergedTypeEffects.notEffective = finalNotEffectiveFilter
        mergedTypeEffects.superEffective = finalSuperEffectiveFilter
        return mergedTypeEffects
    }   

    
}

export default CheckTypeEffect


