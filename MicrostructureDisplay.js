

let microstructure = {
    // some meta data

    // The dimensions
    dimensions : [
        {
            label: "Thickness",
            unit: "mm",
            values: [
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
                0.1391,
            ],
            usage: 'w'
        },
        {
            label: "Rotation",
            unit: "°",
            values: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ]
        },
        {
            label: "a11",
            unit: "1",
            values: [
                0.836,
                0.912,
                0.95,
                0.941,
                0.923,
                0.878,
                0.776,
                0.5,
                0.302,
                0.225,
                0.101,
                0.101,
                0.225,
                0.302,
                0.5,
                0.776,
                0.878,
                0.923,
                0.941,
                0.95,
                0.912,
                0.836,                
            ]
        },
        {
            label: "a22",
            unit: "1",
            values: [
                0.15,
                0.0745,
                0.0391,
                0.0457,
                0.0641,
                0.108,
                0.206,
                0.48,
                0.68,
                0.751,
                0.872,
                0.872,
                0.751,
                0.68,
                0.48,
                0.206,
                0.108,
                0.0641,
                0.0457,
                0.0391,
                0.0745,
                0.15,                               
            ]
        },
        {
            label: "a33",
            unit: "1",
            values: [
                0.0147,
                0.0135,
                0.0113,
                0.013,
                0.0125,
                0.014,
                0.0177,
                0.0196,
                0.0179,
                0.0242,
                0.0262,
                0.0262,
                0.0242,
                0.0179,
                0.0196,
                0.0177,
                0.014,
                0.0125,
                0.013,
                0.0113,
                0.0135,
                0.0147,                            
            ]
        }
    ]
}

function MapToDisplayAccordingTo (givenAbscice) {

    let layers = microstructure.dimensions.filter(dimension => dimension.label === givenAbscice)[0].values.length
    let X = []
    let Ys = {}
    let ongoingX = 0
    let Ydims = []
    //console.log("layers " + layers)

    // Setup Y list per dimension
    microstructure.dimensions
        .map(dimension => {return dimension.label})
        .forEach(dimKey => {
        if (dimKey !== givenAbscice && // the dimension is not the one selected for abscice
            microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].usage !== 'w') { // nor it is one used to build an abscice
            Ys[dimKey] = []
            Ydims.push(dimKey) // for simpler later forEach...
        }
    })

    // Add the points per layers
    for (let layer = 0; layer < layers; layer++) {
        //console.log("adding layer " + layer)
        // First point
        X.push(ongoingX)
        Ydims.forEach(dimKey => {
            Ys[dimKey].push(
                microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].values[layer]
            )
        })
        // Crossing the layer
        ongoingX += microstructure.dimensions.filter(dimension => dimension.label === givenAbscice)[0].values[layer]
        // Second point
        X.push(ongoingX)
        Ydims.forEach(dimKey => {
            Ys[dimKey].push(
                microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].values[layer]
            )
        })
    }

    // Computing relative abscice
    let relX = []
    X.forEach(x => { relX.push(x / Math.max(...X))}) 

    // Outcome as you want
    return {
        X: {
            absolute: X,
            relative: relX
        },
        Ys: Ys,
        Ydimensions: Ydims // We can imagine to short list here what's selectable as Y abscice easily
    }

}

function FindDefaultY (givenAbscice) {
    let Ys = {}

    microstructure.dimensions
        .map(dimension => {return dimension.label})
        .forEach(dimKey => {
        if (dimKey !== givenAbscice && // the dimension is not the one selected for abscice
            microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].usage !== 'w') { // nor it is one used to build an abscice
            Ys[dimKey] = {
                min : Math.min(...microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].values),
                max: Math.max(...microstructure.dimensions.filter(dimension => dimension.label === dimKey)[0].values),
            }
            if (Ys[dimKey].min === 0) { // No div by 0
                Ys[dimKey].displayIndex = 0 
            } else {
                Ys[dimKey].displayIndex = Ys[dimKey].max / Ys[dimKey].min // Compute max display index
            }
        }
    })

    let defaultY =  Object.keys(Ys)[0]
    Object.keys(Ys).forEach(dimKey => {
        if (Ys[defaultY].displayIndex < Ys[dimKey].displayIndex) { // Pick the max display index
            defaultY = dimKey
        }
    })
    return {
        defaultY: defaultY,
        Ys: Ys
    }
}


console.log("\nmicrostructure", microstructure)

let mappingOutcome = MapToDisplayAccordingTo("Thickness")
console.log("\nmappingOutcome", mappingOutcome)


let defaultYOutcome = FindDefaultY("Thickness")
console.log("\ndefaultYOutcome", defaultYOutcome)