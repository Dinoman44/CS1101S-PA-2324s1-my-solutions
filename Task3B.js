// TASK 3B

// copied from mission
// you can also use quick_sort or merge_sort but
// this was the first one i found
function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function make_balanced_BST(L) {
    function helper(M) {
        if (is_null(M)) {
            return null; // base case, should be obvious
        }
        
        let sorted_copy = M; // M has been sorted already
        const len = length(M);
        const half = math_floor(len / 2); // midpoint of list
        let left = null;
        let right = null;
        
        // go through the elements in M
        for (let i = 0; i < len; i = i + 1) {
            // if the element is in the left half, put it in the left tree
            // otherwise put it in the right half
            // if the element is in the middle, don't put it left or right
            if (i < half) {
                left = pair(head(sorted_copy), left);
            } else if (i > half) {
                right = pair(head(sorted_copy), right);
            }
            sorted_copy = tail(sorted_copy); // move on to the next element
        }
        
        // Exercise: try doing the above using the take/drop functions
        // that you made for the merge sort mission
        // or even the partition function from the quick sort mission
        
        // a tree is a list(entry, left_tree, right_tree)
        // so take the middle value and recurse on left and right half
        return list(
            list_ref(M, half), // the entry is the halfway point
            helper(reverse(left)), // why again have to reverse this?
            helper(reverse(right)) // hint: reason is similar to before
        );
    }
    
    return helper(insertion_sort(L)); // sort the list and pass in to helper
}