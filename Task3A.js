// TASK 3A

// simple recursive thinking;
// flatten left tree, flatten right tree, append it all together
function flatten_bin_tree(T) {
    if (is_null(T)) {
        return null;
    } else {
        return append(
            flatten_bin_tree(head(tail(T))),
            append(list(head(T)), flatten_bin_tree(head(tail(tail(T))))));
    }
}