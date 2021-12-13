//let i = 1;
const scatola = document.getElementById("scatola")

for (let i = 1; i <= 100; ++i) {
        if ((i%3 == 0) && (i%5 == 0)) {
            console.log ("fizzbuzz");
            scatola.innerHTML += '<div class="fizzbuzz col-1 mx-auto">FizzBuzz</div>';
        } else if (i%5 == 0) {
            console.log ("buzz");
            scatola.innerHTML += '<div class="buzz col-1 mx-auto">Buzz</div>';
        } else if (i%3 == 0){
            console.log ("fizz");
            scatola.innerHTML += '<div class="fizz col-1 mx-auto">Fizz</div>';
        } else {
            console.log (i);
            scatola.innerHTML += '<div class="number col-1 mx-auto">' + i + '</div>';
        }
    //console.log (i);
    
}

