// const readline = require('readline');

// const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

// const getLine = (function () {
//     const getLineGen = (async function* () {
//         for await (const line of rl) {
//             yield line;
//         }
//     })();
//     return async () => ((await getLineGen.next()).value);
// })();

// const main = async () => {
//     let a = Number(await getLine());
//     let b = Number(await getLine());
//     console.log(a+b);
//     process.exit(0);
// };

// main();

const readline = require('readline');

const r = readline.createInterface({ input: process.stdin, output:process.stdout});
r.question("무슨 숫자를 넣을래?",function(answer){
    console.log(`입력된 숫자 :${answer}`);
    r.close;
});

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter the first number : ', (answer1) => {
//     rl.question('Please enter the second number : ', (answer2) => {
//         var result = (+answer1) + (+answer2);
//         console.log(`The sum of above two numbers is ${result}`);
//         rl.close();
//     });
// });