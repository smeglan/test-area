const test1 = [
    [2, 1, 9, 3, 8, 9, 2, 9, 5],
    [9, 8, 2, 7, 6, 3, 2, 3, 7],
    [6, 8, 2, 1, 4, 4, 9, 7, 6],
    [8, 3, 2, 4, 9, 4, 1, 7, 7],
    [7, 6, 2, 2, 9, 5, 1, 6, 3],
    [9, 8, 3, 1, 9, 8, 8, 8, 2],
    [8, 6, 7, 8, 7, 3, 4, 2, 7],
    [8, 8, 5, 8, 1, 9, 9, 1, 9],
    [7, 7, 8, 4, 4, 7, 8, 8, 2]
]
const test2 = [
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [9, 8, 2, 7, 6, 3, 2, 3, 7],
    [6, 8, 2, 1, 4, 4, 9, 7, 6],
    [8, 3, 2, 4, 9, 4, 1, 7, 7],
    [7, 6, 2, 2, 9, 5, 1, 6, 3],
    [9, 8, 3, 1, 9, 8, 8, 8, 2],
    [8, 6, 7, 8, 7, 3, 4, 2, 7],
    [8, 8, 5, 8, 1, 9, 9, 1, 9],
    [7, 7, 8, 4, 4, 7, 8, 8, 2]
]

const matrixRepeatDetector = (matrix) => {
    let countRepeatRows = 0;
    matrix.forEach(row => {
        const repeatDict = {}
        let repeat = false;
        let count = 0;
        while (count < 9 && !repeat) {
            if (repeatDict[row[count]]) {
                repeat = true;
                countRepeatRows++;
                console.log("Repeat ", row[count]);
            } else {
                repeatDict[row[count]] = true;
                count++;
            }
        }
        console.log(repeatDict)
    });
    console.log(countRepeatRows);
    return countRepeatRows;
}

//matrixRepeatDetector(test1);
//matrixRepeatDetector(test2);

const persistenceCalculator = (value) => {
    let persitence = 0
    let digits = String(value).split('')
    do {
        result = 1;
        digits.forEach(n => {
            result*=n;
        });
        console.log(result);
        persitence ++;
        digits = String(result).split('')
    } while (digits.length > 1);
    console.log("Persistence of ", value, " is ", persitence);
}

persistenceCalculator(715);