// TASK 3C

// copied from task 3a
function flatten_bin_tree(T) {
    if (is_null(T)) {
        return null;
    } else {
        return append(
            flatten_bin_tree(head(tail(T))),
            append(list(head(T)), flatten_bin_tree(head(tail(tail(T))))));
    }
}

// copied from mission
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

// helper function to count the number of elements in a tree
// also im 70% sure this was in some mission/lecture slide/something
function count_el_tree(tree) {
    if (is_null(tree)) {
        return 0;
    } else {
        return 1 + count_el_tree(head(tail(tree))) + count_el_tree(head(tail(tail(tree))));
    }
}

// copied and modified from task 3b
function make_unbalanced_BST(L, T, left_weight) {
    // L is the flattened tree
    // T is the original tree
    // left_weight is the number of elements in the left subtree of T
    
    // same for M, S and lw respectively, except M is also sorted
    function helper(M, S, lw) {
        if (is_null(M) || is_null(S)) {
            return null; // obvious
        }
        
        // the idea of this code is that we are building a BST
        // that has the same structure as the original tree
        // which means that if the original tree has 5 elements in the
        // left subtree and 7 in the right subtree
        // the BST will follow the same pattern
        // therefore we keep track of how many elements are
        // present in the left subtree at all times (and call it lw)
        
        let sorted_copy = M;
        const len = length(M);
        let left = null;
        let right = null;
        
        // instead of using midpoint of list, use the left_weight instead
        // no other changes; making left and right lists as before
        for (let i = 0; i < len; i = i + 1) {
            if (i < lw) {
                left = pair(head(sorted_copy), left);
            } else if (i > lw) {
                right = pair(head(sorted_copy), right);
            }
            sorted_copy = tail(sorted_copy);
        }
        
        const left_subtree = head(tail(S));
        const right_subtree = head(tail(tail(S)));
        
        // number of elements in left subtree of left subtree of S
        const count_left_left = is_null(left_subtree)
                                ? 0
                                : count_el_tree(head(tail(left_subtree)));
        
        // number of elements in left subtree of right subtree of S
        const count_left_right = is_null(right_subtree)
                                 ? 0
                                 : count_el_tree(head(tail(right_subtree)));
        
        return list(
            list_ref(M, lw),
            helper(reverse(left), left_subtree, count_left_left),
            helper(reverse(right), right_subtree, count_left_right)
        );
    }

    return helper(insertion_sort(L), T, left_weight);
}

// note that in a tree,
// head(T) = entry
// head(tail(T)) is left subtree
// head(tail(tail(T))) is right subtree
function bin_tree_to_BST(T) {
    if (is_null(T)) {
        return null; // base case
    } else if (is_null(head(tail(T))) && is_null(head(tail(tail(T))))) {
        return T; // case where only one element in tree
    } else {
        const left_side_weight = count_el_tree(head(tail(T)));
        return make_unbalanced_BST(flatten_bin_tree(T), T, left_side_weight);
    }
}