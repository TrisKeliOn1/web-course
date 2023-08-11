const escola = "cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //nesse caso, nada acontece, pois não há nenhum numero correspondente
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log("escola " .concat(escola) .concat("!") );
console.log(escola.replace(3, "e"));
console.log("Pedro, Maria, João".split(",;"))