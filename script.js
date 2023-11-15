// Función principal
function sumArray(array) {
    // Paso 1: Verifica si el array cumple con las condiciones dadas
    if (!array || !Array.isArray(array) || array.length <= 2) {
        return 0; // Devuelve 0 si el array no cumple con las condiciones
    }

    // Inicializa variables para el valor mínimo, máximo y la suma
    let min = array[0];
    let max = array[0];
    let sum = 0;

    // Paso 1: Recorre el array para calcular la suma, el valor mínimo y el valor máximo
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        // Actualiza el valor mínimo si se encuentra un valor menor
        if (array[i] < min) {
            min = array[i];
        }

        // Actualiza el valor máximo si se encuentra un valor mayor
        if (array[i] > max) {
            max = array[i];
        }
    }

    // Devuelve la suma excluyendo el valor mínimo y máximo
    return sum - min - max;
}

// Función alternativa con sort y reduce
function sumArrayWithSort(array) {
    // Paso 1: Verifica si el array cumple con las condiciones dadas
    if (!array || !Array.isArray(array) || array.length <= 2) {
        return 0; // Devuelve 0 si el array no cumple con las condiciones
    }

    // Paso 2: Ordena el array de forma ascendente
    array.sort(function (a, b) {
        return a - b;
    });

    // Paso 3: Utiliza slice y reduce para calcular la suma excluyendo el primer y último elemento
    return array.slice(1, -1).reduce(function (acc, val) {
        return acc + val;
    }, 0);
}

// Función alternativa sin sort ni reduce
function sumArrayWithoutSortReduce(array) {
    // Paso 1: Verifica si el array cumple con las condiciones dadas
    if (!array || !Array.isArray(array) || array.length <= 2) {
        return 0; // Devuelve 0 si el array no cumple con las condiciones
    }

    // Inicializa variables para el valor mínimo, máximo y la suma
    let min = array[0];
    let max = array[0];
    let sum = 0;

    // Paso 2: Recorre el array para calcular la suma, el valor mínimo y el valor máximo
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        // Actualiza el valor mínimo si se encuentra un valor menor
        if (array[i] < min) {
            min = array[i];
        }

        // Actualiza el valor máximo si se encuentra un valor mayor
        if (array[i] > max) {
            max = array[i];
        }
    }

    // Devuelve la suma excluyendo el valor mínimo y máximo
    return sum - min - max;
}
