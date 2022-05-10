const axios = require("axios")
const { Race, Temper } = require("../../db")
const { API_KEY } = process.env


module.exports = {
    getAllDogs: async() => {
        const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        //console.log(dogs)
       return dogs.data.map((dog=>{
              return{
                id:dog.id,
                name:dog.name,
                temperament:dog.temperament,
                image:dog.image,
                weight:dog.weight,
                life_span:dog.life_span,
              }
            }))
    },
    postDog: async (name, height, weight, life_span, temper) => {

        if (!name || !height || !weight || !life_span || !temper) throw new Error("faltan parametros a ingresar")
        const newDog = await Race.create({ name, height, weight, life_span })
        await newDog.addTemper(temper)
        return "Perrito creado"

    },
    getDogById: (idRaza) => {
        let dog = Race.findByPk(idRaza, {
            include: Temper
        }).then(data => data)
        return dog
    }
}