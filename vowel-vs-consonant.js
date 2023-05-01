// Define a string

// Convert the string to lower case so that comparisons can be reduced. Else we need to compare with capital (A, E, I, O, U).

// If any character in string matches with vowels (a, e, i, o, u ) then increment the vcount by 1.

// If any character lies between 'a' and 'z' except vowels, then increment the count for ccount by 1.

// Print both the counts.


// < ---------------  FIRST ----------------- >
// Input array of "hello"

    const calcTypeOfLetters = (str) => {
    const res = { Vowels: 0, Consonants: 0 };
    const VOWELS = ["a", "e", "i", "o", "u"];

    for (let char of str) {
        if (VOWELS.includes(char.toLowerCase())) {
        res["Vowels"] = res["Vowels"] + 1;
        } else {
        res["Consonants"] = res["Consonants"] + 1;
        }
    }
    return res;
    };
    console.log(calcTypeOfLetters("hello"));

// Expected result of "hello has 3 consonants and 2 vowels"


// < ---------------  SECOND ----------------- >

// // Input array of "ukelele"

    // const calcTypeOfLetters = (str) => {
    //   const res = { Vowels: 0, Consonants : 0 }
    // // defining vowels
    //   const VOWELS = ["a","e","i","o","u"]

    //   for(let char of str){
    //     if(VOWELS.includes(char.toLowerCase())){
    //       res["Vowels"] = res["Vowels"] + 1
    //     }else {
    //       res["Consonants"] = res["Consonants"] + 1
    //     }
    //   }
    //   return res
    // }
    // console.log(calcTypeOfLetters("ukelele"))

// Expected result of "ukelele has 3 consonants and 4 vowels"


// < ---------------  THIRD ----------------- >

// Input array of "awesome"

    // const calcTypeOfLetters = (str) => {
    //   const res = { Vowels: 0, Consonants : 0 }
    //   const VOWELS = ["a","e","i","o","u"]

    //   for(let char of str){
    //     if(VOWELS.includes(char.toLowerCase())){
    //       res["Vowels"] = res["Vowels"] + 1
    //     }else {
    //       res["Consonants"] = res["Consonants"] + 1
    //     }
    //   }
    //   return res
    // }
    // console.log(calcTypeOfLetters("awesome"))

// Expected result of "awesome has 3 consonants and 4 vowels"

// < ---------------  FORTH ----------------- >


// Input array of "onomonopia"

        // const calcTypeOfLetters = (str) => {
        //   const res = { Vowels: 0, Consonants : 0 }
        //   const VOWELS = ["a","e","i","o","u"]

        //   for(let char of str){
        //     if(VOWELS.includes(char.toLowerCase())){
        //       res["Vowels"] = res["Vowels"] + 1
        //     }else {
        //       res["Consonants"] = res["Consonants"] + 1
        //     }
        //   }
        //   return res
        // }
        // console.log(calcTypeOfLetters("onomonopia"))

        // Expected result of "onomonopia has 4 consonants and 6 vowels"

// < ---------------  FIFTH ----------------- >

// Input array of "textbook"

    // const calcTypeOfLetters = (str) => {
    //   const res = { Vowels: 0, Consonants : 0 }
    //   const VOWELS = ["a","e","i","o","u"]

    //   for(let char of str){
    //     if(VOWELS.includes(char.toLowerCase())){
    //       res["Vowels"] = res["Vowels"] + 1
    //     }else {
    //       res["Consonants"] = res["Consonants"] + 1
    //     }
    //   }
    //   return res
    // }
    // console.log(calcTypeOfLetters("textbook"))

// Expected result of "textbook has 5 consonants and 3 vowels"
