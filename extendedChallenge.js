const prompt = require('prompt-sync')();

let hours = prompt('Enter the number of hours worked: ');
let wage = prompt('Enter the the wage ($ per hour): ');
let pay;

if (hours > 40) {
    pay = 40 * wage + ((hours - 40) * (1.5 * wage));
    console.log(`Pay = ${pay}`);
} else {
    pay = (hours * wage);
    console.log(`Pay = ${pay}`);
}

let weeks;
const total = 1000000;
weeks = total / pay;
weeks = Math.round(weeks);
console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks for them to earn $1,000,000.`);