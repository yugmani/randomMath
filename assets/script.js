

let random = 0;

const generateRandom = function (){
    random = Math.random();
    // console.log("Just a Random Number:"+ random);
    return random;
}

const randomRange = function (num1){
    // random = Math.random()*5;
    random = num1*5;
    return random;
    // console.log("With Range of 5: "+ random);
}


const floorRangeRandom= function (num2){
    // random = Math.floor(random*5);
    random = Math.floor(num2);
    return random;
    console.log("Random with Floor: "+ random);
}

const floorRandomPlus = function (num3){
    // random = Math.floor(random*5) + 1;
    random = num3+1;
    return random;
    // console.log("Random with floor and plus one: "+ random);
}



let generate = document.getElementById("generate");
generate.addEventListener("click", function(event){
    let html = "<ul>";
    html += "<li><h3><code>Math.random()</code>=  "+ generateRandom()+ "</h3>";
    html += "<p>Just a random number between 0 and 1</p></li>";
    // let result = document.getElementById("random");
    // result.innerHTML = html;

    html += "<li><h3><code>Math.random()*5</code>=  "+ randomRange(random)+ "</h3>";
    html += "<p>A random number between 0 and 4</p></li>";
    // result = document.getElementById("range");
    // result.innerHTML = html;

    html += "<li><h3><code>Math.floor(random*5)</code>=  "+ floorRangeRandom(random)+ "</h3>";
    html += "<p>An Integer between 0 and 4</p></li>";
    // result = document.getElementById("floor");
    // result.innerHTML = html;

    html += "<li><h3><code>Math.floor(random*5) + 1</code>=  "+ floorRandomPlus(random)+ "</h3>";
    html += "<p>A random number starts at 1 instead of 0</p></li>";
    html +="</ul>";

    let result = document.getElementById("result");
    result.innerHTML = html;

    // console.log(html);
    // let result = document.getElementById("random");
    // result.innerHTML = html;
})



// generateRandom();

// randomRange(random);

// floorRangeRandom(random);

// floorRandomPlus(random);