const axios = require("axios");
const { Temperament } = require("../../db");
const { API_KEY } = process.env;

module.exports = {
    getTemperaments: async () => {
        let temperaments = await Temperament.findAll({
            attributes:["name","id"],
            throught:[]
        })
        if (temperaments[0] !== undefined) return { data: temperaments }

        const datos = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

        let temperFinal = datos.data.map(e => {
            return e.temperament === undefined ? null : e.temperament.split(",")
        }).filter(e => e)

        temperFinal = [...new Set(temperFinal.map(e => e[0]))]
        await temperFinal.forEach(e => {
            Temperament.create({
                name: e
            })
        })

        return { data: temperFinal.map(e=>{return {"name":e}}) }
        // return "entro a la funcion getTemperaments"
    }
}