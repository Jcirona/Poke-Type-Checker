
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
        "superEffective": ["bug", "rock", "dark"]
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
    

    if (!typeData[typeTwo]) {
        return typeData[typeOne]
    } if (typeData[typeTwo]) {
    let firstType = typeData[typeOne]
    let secondType = typeData[typeTwo]
    
        var { noEffect: noEffect1, notEffective: notEffective1, superEffective: superEffective1 } = firstType
        var { noEffect: noEffect2, notEffective: notEffective2, superEffective: superEffective2 } = secondType
        let mergedTypeEffects = {
            noEffect: noEffect1.concat(noEffect2),
            notEffective: notEffective1.concat(notEffective2),
            superEffective: superEffective1.concat(superEffective2)
        }
        let filteredNotEffectiveArray = mergedTypeEffects.notEffective
            .filter((type, index) => index == mergedTypeEffects.notEffective.indexOf(type))
        // console.log(filteredNotEffectiveArray)

        let doubleNotEffectiveArray = mergedTypeEffects.notEffective
            .filter((type, index) => index !== mergedTypeEffects.notEffective.indexOf(type))

        let doublesuperEffectiveArray = mergedTypeEffects.superEffective
            .filter((type, index) => index !== mergedTypeEffects.superEffective.indexOf(type))

        mergedTypeEffects.doubleNotEffective = doubleNotEffectiveArray
        mergedTypeEffects.doublesuperEffective = doublesuperEffectiveArray
        return mergedTypeEffects
    }

    return(
        <>
        <div className="workpls">
            <h1>am I here?</h1>
        </div>
        </>
    )

   
}

export default CheckTypeEffect

