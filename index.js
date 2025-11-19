function min(a, b) 
{
    return a < b ? a : b;
}
alert(min(2, 5))
function pow(num, degree) 
{
    return num ** degree;
}
alert(pow(2, 5))

function calc(a, b, operator) 
{
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;

    return "Неверный оператор";
}
alert(calc(2, 5, '+'))

function table(n) 
{
    for (let i = 1; i <= 10; i++) 
    {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

for (let i = 2; i <= 9; i++) 
{
    table(i);
}


function myMod(a, b)
{
    while (a >= b) 
    {
        a = a - b;
    }
    return a;
}

alert(myMod(2, 5))

function minFive() {
    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++) 
    {
        if (arguments[i] < min) 
        {
            min = arguments[i];
        }
    }

    return min;
}
alert(minFive())

function maxFive() 
{
    let max = arguments[0];

    for (let i = 1; i < arguments.length; i++) 
    {
        if (arguments[i] > max) 
        {
            max = arguments[i];
        }
    }

    return max;
}
alert(maxFive())
