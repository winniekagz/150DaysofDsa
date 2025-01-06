function summation(initialNumber:number,arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += (initialNumber*arr[i]);
    }
    console.log(sum);
    return sum;
}

function summationLowerComplexity(initialNumber:number,arr:number[]):number{
    let sum=0
    sum=arr.reduce((acc,current)=>acc+current*2,0)
    console.log('lower Complexity',sum);
    return sum
}

function summationofNaturalNumbers(n:number){
    let sum=0
    sum=n*(n+1)/2
    console.log('naturalNumbers',sum)
    return sum
}
function summationofNaturalNumbersofN(multiple:number,n:number){
    let sum=0
    sum=n*((n+1)*multiple)/2
    console.log('naturalNumbersofN',sum)
    return sum
}
summation(2,[1, 2, 3, 4, 5, 6, 7]);
summationLowerComplexity(3,[1,2,3,4,5,6,7,8,9])
summationofNaturalNumbersofN(3,365)
