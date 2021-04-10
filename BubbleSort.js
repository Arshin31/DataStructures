var arr = [5, 9, 2, 1, 0];
var n = arr.length;

for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

for (var i = 0; i < n - 1; i++) {
    console.log(arr[i]);
}