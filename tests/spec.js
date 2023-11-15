describe('sumArray', function () {
    // Describe un conjunto de pruebas para la función sumArray.
    it('should return 0 for null', function () {
        // Prueba: Debería devolver 0 para un valor nulo.
        expect(sumArray(null)).toEqual(0);
        expect(sumArrayWithSort(null)).toEqual(0);
        expect(sumArrayWithoutSortReduce(null)).toEqual(0);
        // Se prueba la función principal y las funciones alternativas con un valor nulo.
    });

    it('should return 0 for an empty array', function () {
        // Prueba: Debería devolver 0 para un array vacío.
        expect(sumArray([])).toEqual(0);
        expect(sumArrayWithSort([])).toEqual(0);
        expect(sumArrayWithoutSortReduce([])).toEqual(0);
        // Se prueba la función principal y las funciones alternativas con un array vacío.
    });

    it('should return 0 for an array with one element', function () {
        // Prueba: Debería devolver 0 para un array con un solo elemento.
        expect(sumArray([3])).toEqual(0);
        expect(sumArrayWithSort([3])).toEqual(0);
        expect(sumArrayWithoutSortReduce([3])).toEqual(0);
        // Se prueba la función principal y las funciones alternativas con un array que tiene un solo elemento.
    });

    it('should return 0 for an array with two elements', function () {
        // Prueba: Debería devolver 0 para un array con dos elementos.
        expect(sumArray([3, 5])).toEqual(0);
        expect(sumArrayWithSort([3, 5])).toEqual(0);
        expect(sumArrayWithoutSortReduce([3, 5])).toEqual(0);
        // Se prueba la función principal y las funciones alternativas con un array que tiene dos elementos.
    });

    it('should return the correct sum for an array with more than two elements', function () {
        // Prueba: Debería devolver la suma correcta para un array con más de dos elementos.
        expect(sumArray([6, 2, 1, 8, 10])).toEqual(16);
        expect(sumArray([0, 1, 6, 10, 10])).toEqual(17);
        expect(sumArray([-6, -20, -1, -10, -12])).toEqual(-28);
        expect(sumArray([-6, 20, -1, 10, -12])).toEqual(3);
        // Se prueba la función principal con varios arrays y se comparan con los resultados esperados.

        expect(sumArrayWithSort([6, 2, 1, 8, 10])).toEqual(16);
        expect(sumArrayWithSort([0, 1, 6, 10, 10])).toEqual(17);
        expect(sumArrayWithSort([-6, -20, -1, -10, -12])).toEqual(-28);
        expect(sumArrayWithSort([-6, 20, -1, 10, -12])).toEqual(3);
        // Se prueba la función alternativa con sort y reduce con los mismos arrays.

        expect(sumArrayWithoutSortReduce([6, 2, 1, 8, 10])).toEqual(16);
        expect(sumArrayWithoutSortReduce([0, 1, 6, 10, 10])).toEqual(17);
        expect(sumArrayWithoutSortReduce([-6, -20, -1, -10, -12])).toEqual(-28);
        expect(sumArrayWithoutSortReduce([-6, 20, -1, 10, -12])).toEqual(3);
        // Se prueba la función alternativa sin sort ni reduce con los mismos arrays.
    });
});
