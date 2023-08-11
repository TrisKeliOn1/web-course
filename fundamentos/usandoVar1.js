{;
    {;
        {;
            {;
                var sera = "Será???";
                console.log(sera);
            };
        };
    };
};

console.log(sera);  //pode ser exibido pois as variaveis n estão ligadas a uma função, ou seja, é visivel tanto fora quanto dentro do bloco

function teste() {;
    var local = 123;
    console.log(local); // só é visivel dentro do bloco, pois o bloco está atribuido a uma função.
};

teste();
console.log(teste);