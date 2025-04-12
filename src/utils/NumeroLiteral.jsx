export function NumeroLiteral(numero, denominacion) {
    if (Number(numero) === 0) {
        return ('');
    }

    const unidades = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
    const especiales = ["", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
    const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
    const centenas = ["", "CIEN", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

    function convertirCentenas(num) {
        let palabras = "";  
        if (num >= 100) {
            if (num === 100) {
                return "CIEN ";
            } else {
                let centena = Math.floor(num / 100);
                palabras += centenas[centena] + " ";
                num %= 100;
            }
        }

        if (num >= 20) {
            let decena = Math.floor(num / 10);
            palabras += decenas[decena];
            num %= 10;
            if (num > 0) {
                palabras += " Y ";
            }
        } else if (num >= 11 && num <= 19) {
            palabras += especiales[num - 10];
            num = 0;
        } else if (num === 10) {
            palabras += decenas[1];
            num = 0;
        }

        palabras += unidades[num];
        return palabras.trim();
    }

    function convertirMiles(num) {
        let palabras = "";
        if (num >= 1000) {
            let miles = Math.floor(num / 1000);
            if (miles === 1) {
                palabras += "MIL ";
            } else {
                palabras += convertirCentenas(miles) + " MIL ";
            }
            num %= 1000;
        }
        palabras += convertirCentenas(num);
        return palabras.trim();
    }

    function convertirMillones(num) {
        let palabras = "";
        if (num >= 1000000) {
            let millones = Math.floor(num / 1000000);
            if (millones === 1) {
                palabras += "UN MILLÓN ";
            } else {
                palabras += convertirCentenas(millones) + " MILLONES ";
            }
            num %= 1000000;
        }
        palabras += convertirMiles(num);
        return palabras.trim();
    }

    const parteEntera = Math.floor(numero);
    const parteDecimal = Math.round((numero - parteEntera) * 100); // Redondeo a 2 decimales

    let palabras = convertirMillones(parteEntera);

    if (parteDecimal > 0) {
        palabras += " CON " + convertirCentenas(parteDecimal) + " CENTAVOS DE";
    }

    var frase = palabras.trim().toUpperCase() + " " + denominacion.toUpperCase();
    return (
        frase
    );
}
