describe('sumArray', function () {
    it('should return 0 for null', function () {
        
        expect(sumArrayWithSort(null)).toEqual(0);
        expect(sumArrayWithoutSortReduce(null)).toEqual(0);
    });

    it('should return 0 for an empty array', function () {
        
        expect(sumArrayWithSort([])).toEqual(0);
        expect(sumArrayWithoutSortReduce([])).toEqual(0);
    });

    it('should return 0 for an array with one element', function () {
        
        expect(sumArrayWithSort([3])).toEqual(0);
        expect(sumArrayWithoutSortReduce([3])).toEqual(0);
    });

    it('should return 0 for an array with two elements', function () {
        
        expect(sumArrayWithSort([3, 5])).toEqual(0);
        expect(sumArrayWithoutSortReduce([3, 5])).toEqual(0);
    });

    it('should return the correct sum for an array with more than two elements', function () {
    

        expect(sumArrayWithSort([6, 2, 1, 8, 10])).toEqual(16);
        expect(sumArrayWithSort([0, 1, 6, 10, 10])).toEqual(17);
        expect(sumArrayWithSort([-6, -20, -1, -10, -12])).toEqual(-28);
        expect(sumArrayWithSort([-6, 20, -1, 10, -12])).toEqual(3);

        expect(sumArrayWithoutSortReduce([6, 2, 1, 8, 10])).toEqual(16);
        expect(sumArrayWithoutSortReduce([0, 1, 6, 10, 10])).toEqual(17);
        expect(sumArrayWithoutSortReduce([-6, -20, -1, -10, -12])).toEqual(-28);
        expect(sumArrayWithoutSortReduce([-6, 20, -1, 10, -12])).toEqual(3);
    });
});
