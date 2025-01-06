function summation(initialNumber, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += (initialNumber * arr[i]);
    }
    console.log(sum);
    return sum;
}
function summationLowerComplexity(initialNumber, arr) {
    var sum = 0;
    sum = arr.reduce(function (acc, current) { return acc + current * 2; }, 0);
    console.log('lower Complexity', sum);
    return sum;
}
function summationofNaturalNumbers(n) {
    var sum = 0;
    sum = n * (n + 1) / 2;
    console.log('naturalNumbers', sum);
    return sum;
}
function summationofNaturalNumbersofN(multiple, n) {
    var sum = 0;
    sum = n * ((n + 1) * multiple) / 2;
    console.log('naturalNumbersofN', sum);
    return sum;
}
summation(2, [1, 2, 3, 4, 5, 6, 7]);
summationLowerComplexity(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
summationofNaturalNumbersofN(3, 365);
