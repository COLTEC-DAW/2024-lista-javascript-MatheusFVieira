function toList(array){
    if(array.length === 0){
        return null;
    } else {
        return {
            value: array[0],
            rest: toList(array.slice(1))
        };
    }
}

//Teste:

console.log(toList([10,20,30,40]));