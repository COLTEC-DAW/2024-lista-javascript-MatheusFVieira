function deepEquals(obj1, obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        if (!keys2.includes(key)){
            return false;
        }
    }

    return true;
}

//Teste:

let ObjA={
    nome: "Matias",
    idade: "47",
    Sexo: "M",
    Cidade: "Belo Horizonte"
}

let ObjB={
    nome: "Matias",
    idade: "47",
    Sexo: "F",
}

console.log(deepEquals(ObjA, ObjB));