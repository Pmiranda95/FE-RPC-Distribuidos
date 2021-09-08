export const esPrioritario = (codigo) => {
    const char = codigo.charAt(0)
    console.log((char === "P" || char === "W") ? true : false)
    return (char === "P" || char === "W") ? true : false
}

export const verificar = (codigo) => {
    const codigoNumerico = codigo.substr(3, 5)
    const digitoVerificador = codigo.charAt(8)
    let digitoVerificadorGenerado = getDigitoVerificador(codigoNumerico)
    let longitud = digitoVerificadorGenerado.toString().length
    while (longitud > 1) {
        digitoVerificadorGenerado = getDigitoVerificador(digitoVerificadorGenerado)
        longitud = digitoVerificadorGenerado.length
    }
    
    return digitoVerificadorGenerado == digitoVerificador
}

const getDigitoVerificador = (codigoNumerico) => {
    const stringNumber = codigoNumerico.toString()
    const longitud = stringNumber.length
    let suma = 0
    let i = 0
    while(i != longitud) {
        suma += Number(stringNumber.charAt(i))
        i += 1
    }

    return suma
}