const isIsogram = (string) => {
    const arrayString = string.split('');
    const characterList = [];
    // for (let i = 0; i < string.length; i++) {
    //     if (arrayString.includes(string[i])) {
    //         return false;
    //     }
    //     arrayString.push(string[i]);
    // }
    // return true;

    const isIsogram = (string) => {
        const arrayString = string.split('');
        const characterList = [];

        let hasDuplicate = false;

        arrayString.forEach(character => {
            if (characterList.includes(character)) {
                hasDuplicate = true;
            }
            characterList.push(character);
        });

        return !hasDuplicate;
    }
}
console.log(isIsogram("perro")); // should return false

