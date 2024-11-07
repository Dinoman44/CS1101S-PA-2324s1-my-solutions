// TASK 1B

function num_characters_from(A, B) {
    if (A[0] === undefined || B[0] === undefined) {
        return 0; // if either array is empty, answer is obviously 0
    } else {
        // lengths of each array
        const lA = array_length(A);
        const lB = array_length(B);
        
        let counter = 0; // counter variable
        
        // for each character in A, check if that character exists in B
        for (let i = 0; i < lA; i = i + 1) {
            // traverse through A
            for (let j = 0; j < lB; j = j + 1) {
                // traverse through B
                if (A[i] === B[j]) {
                    // if the character in A and in B are equal,
                    // increment the counter and
                    // move to the next character in A (skip the rest of B)
                    counter = counter + 1;
                    break;
                }
            }
        }
        
        return counter;
    }
}

num_characters_from(["h", "e", "l", "l", "o"], ["e", "h", "l", "o"]);