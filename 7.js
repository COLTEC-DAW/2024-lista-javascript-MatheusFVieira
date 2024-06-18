function mod(num , mod) {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return mod(num - mod, mod);
    }
}

//Teste
console.log(mod(20, 5));
console.log(mod(78, 9));
console.log(mod(288, 144));