function swap(arr, firstindex, secondindex) {
    let TP = arr[firstindex];
    arr[firstindex] = arr[secondindex];
    arr[secondindex] = TP
}

function bubble(arr) {

    let len = arr.length

    for (let i = 0; i < len; i++) {
        for(j = 0; j < len-i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }

    console.log('Exo 1 :');
    return arr;
}

console.log(bubble([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3, -1]));