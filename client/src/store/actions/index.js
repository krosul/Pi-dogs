import axios from "axios"
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SET_ORDER_BY_NAME = "SET_ORDER_BY_NAME"
export const BY_HEIGHT = "BY_HEIGHT"
export const EXISTENCE = "EXISTENCE"
export const FILTER_BY_TEMP = "FILTER_BY_TEMP"
export const SEARCH_NAME = "SEARCH_NAME"
export const GET_DETAIL="GET_DETAIL"
export const POST_DOG="POST_DOG"
export const RESET_DETAIL="RESET_DETAIL"


export function getAllDogs() {
    return function (dispatch) {
        return axios("/dogs/")
            .then(response => {
                dispatch({ type: GET_ALL_DOGS, payload: response.data })
            })
            .catch(error => console.error(error))
    }
}
export function getDetail(id){
    return function(dispatch){
        return axios("/dogs/"+id)
        .then(response=>{
            dispatch({type:GET_DETAIL,payload:response.data})
        })
    }
}
export  function PostDogs(payload){
    return function(){
        return axios.post("/dogs/dog",payload)
               .then(response=>response.data)
               .catch(error=>console.error(error))
        
    }
}
export function getTemperaments() {
    return function (dispatch) {
        return axios("/temperament")
            .then(temperaments => dispatch({ type: GET_TEMPERAMENTS, payload: temperaments.data }))
            .catch(error => console.error(error))
    }
}

export function setOrderByName(payload) {
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
        type:RESET_DETAIL,
        payload
    }
}