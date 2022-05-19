/* eslint-disable no-fallthrough */
import { FILTER_BY_TEMP, GET_ALL_DOGS,GET_DETAIL, SET_ORDER_BY_NAME, EXISTENCE, BY_HEIGHT, GET_TEMPERAMENTS, SEARCH_NAME } from "../actions"
const ASCENDENTE = "ASCENDENTE"
const DESCENDENTE = "DESCENDENTE"
const ONLY_IN_DATA_BASE = "ONLY_IN_DATA_BASE"
const ONLY_IN_API = "ONLY_IN_API"
const ALL = "ALL"
const expresion = /^[0-9]*$/

const initialState = {
    dogs: [],
    dog: [],
    temperaments: [],
    filteredogs: []
}


export default function reducer(state = initialState, action) {


    switch (action.type) {
        case GET_ALL_DOGS: {
            return {
                ...state,
                dogs: action.payload.map(e => {
                    if (!expresion.test(e.id) && !e.temperament) {

                        return {
                            ...e,
                            "temperament": e.Temperaments.map(e => e.name).toString()
                        }
                    }
                    return e
                }),
                filteredogs: action.payload.map(e => {
                    if (!expresion.test(e.id) && !e.temperament) {
                        return {
                            ...e,
                            "temperament": e.Temperaments.map(e => e.name).toString()
                        }
                    }
                    return e
                }),
            }
        }
        case SET_ORDER_BY_NAME: {

            if (action.payload === ASCENDENTE) {
                return {
                    ...state,
                    dogs: [...state.dogs].sort((e, b) => e.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
                }
            }
            if (action.payload === DESCENDENTE) {
                return {
                    ...state,
                    dogs: [...state.dogs].sort((e, b) => e.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1)
                }
            }
        }
        case EXISTENCE: {

            if (action.payload === ONLY_IN_API) {
                return {
                    ...state,
                    dogs: [...state.filteredogs].filter(e => {
                        if (expresion.test(e.id)) {
                            console.log("entro al only in api")
                            return e
                        }
                    })
                }
            }
            if (action.payload === ONLY_IN_DATA_BASE) {
                return {
                    ...state,
                    dogs: [...state.filteredogs].filter(e => {
                        if (!expresion.test(e.id)) return e
                    })
                }
            }
            if (action.payload === ALL) {

                return {
                    ...state,
                    dogs: [...state.filteredogs]
                }
            }
        }
        case BY_HEIGHT: {
            if (action.payload === "heavy") {

                return {
                    ...state,
                    dogs: [...state.dogs].sort((a, b) => {
                        return parseInt(a.weight.split("-")[0]) < parseInt(b.weight.split("-")[0]) ? 1 : -1
                    }),
                    // filteredogs: [...state.filteredogs].sort((a, b) => {
                    //     return parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0] ? 1 : -1)
                    // })
                }
            }
            if (action.payload === "thin") {

                return {
                    ...state,
                    dogs: [...state.dogs].sort((a, b) => {
                        return parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0]) ? 1 : -1
                    }),
                    // filteredogs: [...state.filteredogs].sort((a, b) => {
                    //     return parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0] ? 1 : -1)
                    // })
                }
            }
            return {
                ...state,

            }
        }
        case GET_TEMPERAMENTS: {
            return {
                ...state,
                temperaments: action.payload
            }
        }
        case FILTER_BY_TEMP: {
            if (action.payload === ALL) {
                console.log("entro al caso del All")
                return { ...state, dogs: state.filteredogs }
            } else {
                console.log("entro al caso del if dentro del filter by temp")
                return {
                    ...state,
                    dogs: [...state.filteredogs].filter(e => e.temperament.includes(action.payload))
                }
            }

        }
        case SEARCH_NAME: {
            return {
                ...state,
                dogs: action.payload ?
                    [...state.dogs].filter(e => {
                        if (e.name.toLowerCase().includes(action.payload.toLowerCase())) return e
                    })
                    : [...state.filteredogs]
            }
        }
        case GET_DETAIL:{
            return {
                ...state,
                dog:action.payload
            }
        }
        case "RESET_DETAIL":{
            return {
                ...state,
                dog:[]
            }
        }

        default:
            return state
    }

}