
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SET_ORDER_BY_NAME = "SET_ORDER_BY_NAME"
export const BY_HEIGHT = "BY_HEIGHT"
export const EXISTENCE = "EXISTENCE"
export const FILTER_BY_TEMP = "FILTER_BY_TEMP"
export const SEARCH_NAME = "SEARCH_NAME"
export const GET_DETAIL="GET_DETAIL"

export function getAllDogs() {
    return function (dispatch) {
        return fetch("http://localhost:3001/dogs/")
            .then(response => response.json())
            .then(response => {
                dispatch({ type: GET_ALL_DOGS, payload: response })
            })
            .catch(error => console.error(error))
    }
}
export function getDetail(id){
    return function(dispatch){
        return fetch("http://localhost:3001/dogs/"+id)
        .then(response=>response.json())
        .then(response=>{
            dispatch({type:GET_DETAIL,payload:response})
        })
    }
}
export function getTemperaments() {
    return function (dispatch) {
        return fetch("http://localhost:3001/temperament")
            .then(info => info.json())
            .then(temperaments => dispatch({ type: GET_TEMPERAMENTS, payload: temperaments }))
            .catch(error => console.error(error))
    }
}

export function setOrderByName(payload) {
    console.log("entro a la accion de serorderbyname")
    return {
        type: SET_ORDER_BY_NAME,
        payload
    }
}

export function ByExistence(payload) {
    return {
        type: EXISTENCE,
        payload
    }
}

export function ByHeight(payload) {
    return {
        type: BY_HEIGHT,
        payload
    }
}
export function FilterByTemp(payload) {
    return {
        type: FILTER_BY_TEMP,
        payload
    }
}
export function searchByName(payload) {
    return {
        type: SEARCH_NAME,
        payload
    }
}
export function resetDetail(payload){
    return{
        type:"RESET_DETAIL",
        payload
    }
}