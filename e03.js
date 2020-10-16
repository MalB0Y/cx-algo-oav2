function select(arr) {

    let len = arr.length

    for(let i = 0; i < len; i++) {
        let m = i;

        for(let a = i + 1; a < len; a++) {
            if(arr[a] < arr[m]) {
                m = a;
            }
        }
        if(m !== i) {
            let tmp = arr[i];
            arr[i] = arr[m];
            arr[m] = tmp;
        }
    }
    console.log('Exo 3 :');
    return arr;
}


console.log(select([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3, -1]));