document.body.innerHTML = "<h1>Fizz Buzz</h1>";



for (let i = 1; i <= 50; i++) {


if (i % 3 === 0 && i % 5 === 0) {
    document.body.innerHTML +=  "<p>FizzBuzz</p>";
}
else if (i % 3 === 0) {
    document.body.innerHTML +=  "<p>Fizz</p>";
}
else if (i % 5 === 0) {
    document.body.innerHTML +=  "<p>Buzz</p>";
}
else {
    document.body.innerHTML +=  "<p>" + i + "</p>";
}


}
 
