let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);
    
    isAtivo = 1;
    console.log(!!isAtivo); // a exclamação pode ser utulizado como negação.
    console.log(!false);
    console.log(!true)

    console.log(" the truthful...");
    console.log(!!3);
    console.log(!!-1);
    console.log(!!" ");
    console.log(!!"text");
    console.log(!![]);
    console.log(!!{});
    console.log(!!Infinity);
    console.log(!!(isAtivo = true));

    console.log("The falses...");
    console.log("!!0");
    console.log(!!"");
    console.log(!!null);
    console.log(!!NaN);
    console.log(!!undefined);
    console.log(!!(isAtivo = false));

    console.log("to finishin");
    console.log(!!("" || null || 0 || " ")); // true pois um é verdadeiro.

    
    