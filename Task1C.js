// TASK 1C

function num_unique(A) {
    let unique = []; // keep track of unique characters
    
    const len = array_length(A);
    let counter = 0;
    
    for (let i = 0; i < len; i = i + 1) { // go through each character in A
        let found = false;
        for (let j = 0; j < counter; j = j + 1) {
            if (A[i] === unique[j]) { // check if that character matches any in my unique array
                found = true; // if yes, then it is not unique
                break;
            }
        }
        if (!found) { // if i could not find it, then it is unique
            unique[counter] = A[i]; // so add it to the unique array
            counter = counter + 1; // and increment the counter
        }
    }
    return counter;
}