// TASK 2A

// Unmodified helper function given to us
function search_array(A, x) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== x) {
        i = i + 1;
    }
    return i < len ? i : -1;
}


function baseN_to_value(X) {
    // note that X is a pair
    // whose head is the base
    // and tail is a list of digits (represented as characters)

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    const base = head(X);
    let digits = reverse(tail(X)); // see bottom for reason for reversing
    let value = 0;
    let digit_tracker = 0; // number of digits i have used so far
    
    while (!is_null(digits)) {
        const digit_val = search_array(DIGIT_SYMBOLS, head(digits)); // get the digit value
        value = value + math_pow(base, digit_tracker) * digit_val; // you should know this
        digit_tracker = digit_tracker + 1; // i have used one more digit
        digits = tail(digits); // go to the next digit
    }
    
    return value;

}

/* REASON FOR REVERSING THE DIGITS
pair(10, list("1", "2", "3")) represents the decimal number 123, correct?
The way we calculate this is to go from right to left:
3 * 10^0 + 2 * 10^1 + 1 * 10^2
Which means it is more intuitive to reverse the list of digits,
then increment the power from 0 to n - 1

You could instead decrement the power, going from n - 1 to 0,
and there would be no need to reverse the digits, but you need to find
the length of the list first (try implementing this version)

Time complexity remains the same whether or not you reverse the digits
(and it was never an issue in the first place honestly)
It was just more intuitive for me to reverse the digits
and start from 0 going up
*/

