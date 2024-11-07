// TASK 1A

function split(S) {
    let i = 0; // my counter variable
    let arr = []; // empty array
    
    while (char_at(S, i) !== undefined) { // while i am still within the string,
        arr[i] = char_at(S, i); // get the character at that position and put into array
        i = i + 1; // increment counter
    }
    
    return arr; // return the array
}

// can try recursively but not a great idea
// when you have arrays, try iterative
// when you have lists, try recursive