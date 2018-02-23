/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.unshift('');
    for (let i = 0; i < preferences.length; i++) {
        let firstEl = preferences[i]; // i = 1, firstEl = 2
        let secondEl = preferences[firstEl]; // secondEl = 3
        let thirdEl = preferences[secondEl]; // thirdEl = 1
        if (i === thirdEl
            && preferences[firstEl] !== firstEl
            && preferences[secondEl] !== secondEl
            && preferences[thirdEl] !== thirdEl) {
            count++;
            debugger
        }
    }
    return count/3;
};
