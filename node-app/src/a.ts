// let x : number = 1;
// console.log(x);

const greet = (firstName: string) =>{
    console.log('hello ' + firstName);
}

greet("parijat");

let sum = (a : number, b:number):number =>{
    return a+b;
}

const value = sum(3,5);
console.log(value);

//? let sum: (a: number, b: number) => number; => this function says that this function returns a value number
// so we explicitly define a return type of the function so that wheneever we call this function we know what type of value it will return

function runAfter1s(hehe: () => void){
    setTimeout(hehe,1000);
}

runAfter1s(function() {
    console.log("hello");
})


