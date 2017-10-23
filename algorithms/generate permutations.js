var generatePermutations = (n) => {
    var swap = (a, i, j) => {
        var c = a[i];
        a[i] = a[j];
        a[j] = c;
    };
    var permutations = new Array ();
    var perm = new Array (n);
    for (var i = 0; i < n+1; i++) perm[i] = i;
    var i = 1;
    while (i !== 0) {
        permutations.push (perm.slice(1).map(x => --x));
        i = n - 1;
        while (perm[i] > perm[i + 1]) i--;
        var j = n;
        while (perm[j] < perm[i]) j--;
        swap(perm, i, j);
        var k = i + 1;
        var m = i + Math.floor((n - i) / 2);
        while (k <= m) {
            swap (perm, k, n - k + i + 1);
            k++;
        }
    }
    return permutations;
};

var p = generatePermutations (4);