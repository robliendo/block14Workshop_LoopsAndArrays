//Reversed Array

// loop from the index of the last value (array.length - 1) to the
// index of the first value (0).
// Then push the values accordingly to reversedArray

// We input the array [1, 2, 3] and expect result [3, 2, 1]

    const array = [1, 2, 3];
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
    const valueAtIndex = array[i];
    reversedArray.push(valueAtIndex);
    }
    console.log(reversedArray);

// We input the array [1, 3, 5, 7, 9, 11] and expect result [11, 9, 7, 5, 3, 1]

    // const array = [1, 3, 5, 7, 9, 11]
    // const reversedArray = []

    // for(let i = array.length - 1; i >= 0; i--) {
    //   const valueAtIndex = array[i]
    //   reversedArray.push(valueAtIndex)
    // }
    // console.log(reversedArray)

// We input the array [20, 50, 30, 60, 200]and expect result [200, 60, 30, 50, 20]

    // const array = [20, 50, 30, 60, 200]
    // const reversedArray = []

    // for(let i = array.length - 1; i >= 0; i--) {
    //   const valueAtIndex = array[i]
    //   reversedArray.push(valueAtIndex)
    // }
    // console.log(reversedArray)

// We input the array [1, -1, 2, -3, 5, -8, 13] and expect result [13, -8, 5, -3, 2, -1, 1]

    // const array = [1, -1, 2, -3, 5, -8, 13]
    // const reversedArray = []

    // for(let i = array.length - 1; i >= 0; i--) {
    //   const valueAtIndex = array[i]
    //   reversedArray.push(valueAtIndex)
    // }
    // console.log(reversedArray)
