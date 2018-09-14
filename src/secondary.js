module.exports = function () {
    console.log("secondary.")
}


console.log("something")

let x = 0;

async function test() {
   x += await 2;
    console.log("x= ", x);
}

test();

x = x + 1;

console.log("x = ", x)