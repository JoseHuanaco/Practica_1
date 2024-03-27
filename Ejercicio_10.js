function suma(array){
    let result = 0
    for(let i=0; i<array.length; i++){
        result = result + array[i]
    }
    return result
}

console.log(suma([1,2,3,4,5]))
