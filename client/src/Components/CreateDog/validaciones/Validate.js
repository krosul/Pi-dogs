const expresionNumber = /^[0-9]*$/
const expresion = /^(?=.*?[A-Za-z])[A-Za-z+]+$/


export default function ValidateName(data) {

    let error = {}
    if (!data.name) {
        error.name = "the breed cannot be null"


    } else if (!expresion.test(data.name.split(" ").join(""))) {
        error.name = "the breed cannot contains numbers or symbols"


    }

    if (!data.maxHeight || !expresionNumber.test(data.maxHeight)) {
        error.maxHeight = "the maximum height cannot be null,symbols or content letters"

    } else if (data.maxHeight * 1 < data.minHeight * 1) {
        error.maxHeight = "the maximum height cannot be less than the minimum height"

    }


    if (!data.minHeight || !expresionNumber.test(data.minHeight)) {
        error.minHeight = "the maximum height cannot be null or content letters"

    } else if (data.maxHeight * 1 < data.minHeight * 1) {
        error.minHeight = "the minimum height cannot be greater than the maximum height"

    }
    if (!data.maxWeight || !expresionNumber.test(data.maxWeight)) {
        error.maxWeight = "the maximum weight cannot be null or content letters"

    } else if (data.maxWeight * 1 < data.minWeight * 1) {
        error.maxWeight = "the minimum weight cannot be greater than the maximum weight"

    }
    if (!data.minWeight || !expresionNumber.test(data.minWeight)) {
        error.minWeight = "the maximum weight cannot be null or content letters"

    } else if (data.maxWeight * 1 < data.minWeight * 1) {
        error.minWeight = "the minimum weight cannot be greater than the maximum weight"

    }
    if (!data.maxlifeSpan || !expresionNumber.test(data.maxlifeSpan)) {
        error.maxlifeSpan = "the years of life cannot be null, contain numbers or symbols"
    
    } else if (data.maxlifeSpan * 1 < data.minlifeSpan * 1) {
        error.maxlifeSpan = "the maximum life year cannot be less than the minimum life year"
    }
    if (!data.minlifeSpan || !expresionNumber.test(data.minlifeSpan)) {
        error.minlifeSpan = "the years of life cannot be null, contain numbers or symbols"
    
    } else if (data.maxlifeSpan * 1 < data.minlifeSpan * 1) {
        error.minlifeSpan = "the minimun life year cannot be less than the minimum life year"
    }





    return error

}







