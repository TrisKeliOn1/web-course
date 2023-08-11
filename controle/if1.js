function soBoaNocitia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNocitia(8.1)
soBoaNocitia(6.4)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo(1, 2)
seForVerdadeEuFalo({})