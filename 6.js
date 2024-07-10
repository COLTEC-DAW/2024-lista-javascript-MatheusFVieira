function mod2(number) {
    if (number === 0) {
        return true;
    }
    else if (number === 1) {
        return false;
    }
    else {
        return mod2(number - 2);
    }
}

//Teste
console.log(mod2(5));
console.log(mod2(10));
console.log(mod2(288));