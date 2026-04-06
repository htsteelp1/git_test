const input = parseInt(prompt("Please Enter a Number to FizzBuzz up to:"));
function fizzBuzz(a) {
    let fizz = a % 3 === 0;
    let buzz = a % 5 ===0;
    return "fizz".repeat(+fizz) + "buzz".repeat(+buzz) + a.toString().repeat(((fizz+buzz)<1));
}

for (let i = 1;i<=input; i++) {
    console.log(fizzBuzz(i))
}