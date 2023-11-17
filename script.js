function sumArrayWithSort(array) {
    if (!array || !Array.isArray(array) || array.length <= 2) {
        return 0; 
    }

    array.sort(function (a, b) {
        return a - b;
    });

    
    return array.slice(1, -1).reduce(function (acc, val) {
        return acc + val;
    }, 0);
}

function sumArrayWithoutSortReduce(array) {
    if (!array || !Array.isArray(array) || array.length <= 2) {
        return 0; 
    }

    let min = array[0];
    let max = array[0];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }

    return sum - min - max;
}
