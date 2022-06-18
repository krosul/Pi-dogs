const axios = require("axios")
const { Race, Temperament } = require("../../db")
const { API_KEY } = process.env
const expresion = /^[0-9]*$/

const getAllDogs = () => {
    const dogs = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const dogsDb = Race.findAll({
        include: [{ model: Temperament, attributes: ["name", "id"] }],

    })

    return Promise.all([
        dogs,
        dogsDb
    ])
        .then(response => {
            let [dogs, dogsDb] = response
            console.log(dogsDb)
            let dogsFromApi = dogs.data.map((dog => {
                
                return {
                    id: dog.id,
                    name: dog.name,
                    temperament: dog.temperament ? dog.temperament : [],
                    image: dog.image,
                    height: dog.height.metric,
                    weight: dog.weight.metric === "NaN" ? dog.weight.imperial.split("-").join("").split("–").map(e=>e*0.45).join("-"): dog.weight.metric,
                    life_span: dog.life_span,
                }
            }))
            dogsFromApi = [...dogsFromApi, ...dogsDb]
            return dogsFromApi
        })
}
const getByName = (name) => {
    let dog = axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        .then(info => info.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                temperament: dog.temperament,
                image: dog.image,
                height: dog.height,
                weight: dog.weight, 
                life_span: dog.life_span,
            }
        }))
        .catch(e => e)

    return dog.then(info => !info[0] ? "No existe un perro de esa raza" : info)
}
const postDog = async (name, height, weight, life_span, temperament) => {

    if (!name || !height || !weight || !life_span || !temperament[0]) throw new Error("faltan parametros a ingresar")
    const newDog = await Race.create({ name, height, weight, life_span })
    // await newDog.addTemper(temper)
    await temperament.forEach(e => {
        newDog.addTemperament(e)
    })
    return "Perrito creado"

}
const getDogById = async (idRaza) => {
    console.log(idRaza)
    let dogsArray = await getAllDogs()
    idRaza = !expresion.test(idRaza) ? idRaza : Number(idRaza)
    let dog = dogsArray.filter(e => e.id === idRaza)
    // console.log(dog)
    // dog.then(dog=>console.log(dog))// el metodo findByPk devuelve null si no encuentra nada
    return dog
}
module.exports = { getAllDogs, getByName, getDogById, postDog }