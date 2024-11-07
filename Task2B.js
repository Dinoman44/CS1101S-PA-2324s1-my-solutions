// TASK 2B

// my helper function
// finds the highest power p such that base^p <= x
// CS2040S will teach you how to optimize this kind of search
// i could also have done something with logarithms
// but i forgot how logs work in the exam
// try getting a better solution with logs
// (hint: solve for p in the equation above)
function find_highest_pow(base, x) {
    let i = 1;
    while (math_pow(base, i) < x) {
        i = i + 1;
    }
    return i - 1;
}


function value_to_baseN(N, x) {
    // note that N is the base and x is the integer

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];

    let res = null; // my list of digits
    let power = find_highest_pow(N, x); // N^power <= x, as before
    
    while (power >= 0) {
        let digit_pow = math_pow(N, power); // power at the digit
        let digit_val = math_floor(x / digit_pow); // value of the digit
        res = pair(DIGIT_SYMBOLS[digit_val], res); // take the symbol from the DIGIT_SYMBOLS array based on the value
        x = x - digit_val * digit_pow; // subtract this from my original x
        power = power - 1; // decrease the power by 1
    }
    
    return pair(N, reverse(res)); // see bottom for why I reverse this

}

value_to_baseN(10, 0);

/* REASON FOR REVERSING (AGAIN)
Simple reason:
I kept getting the reverse of the required list of digits,
so I tried reversing my final answer and it worked

Proper reason:
Take N = 10, x = 23
After finding the highest power using my helper function,
I get power = 1 (line 28)
digit_pow = 10^1 = 10 (line 31)
digit_val = floor(23/10) = 2 (line 32)
I then pair "2" to my result (which is initially null):
    result = pair("2", null) (after line 33)
Then the number I have so far is actually 2 * 10^1 = 20
which is the same as digit_val * digit_power
So I subtract that from my x and decrement my power
x = 3, power = 0

Executing the while loop one more time gives me:
x = 0
power = -1 (so condition fails)
results = pair(3, result) = pair(3, pair(2, null)) = list(3, 2)
However, note that my digits have gotten reversed
It should be (2, 3) but I got (3, 2)
This is just because of the way I am building my result list:
I am adding values from back to front

Hence I need to reverse the list before returning it

Exercise: try doing this without reversing anything.
Can be recursive or iterative solution.
*/




