var numero = 1;
{;
    var numero = 2;
    console.log("dentro =", numero);
};
console.log("fora =", numero);

// O numero se repete pois está atriuido ao escopo global.