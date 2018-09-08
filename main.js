let number = document.getElementById("number");
let button = document.getElementById("flipbutton");
let results = document.getElementById("results");
let headsresults = document.getElementById("headsresults");
let tailsresults = document.getElementById("tailsresults");

const coinflip = () => {
  let tails = 0;
  let heads = 0;
  let usernumber = parseInt(number.value);

  for (let i = 0; i < usernumber; i++) {
    let randomNumber = Math.floor(Math.random() * 2);
    console.log("random " + randomNumber);

    if (randomNumber === 0){
      heads++;
      console.log("heads:" + heads);
    }
    else {
      tails++;
      console.log("tails:" + tails);
    }
  }

  if(heads > tails){
    results.innerHTML =  "heads wins: " + heads + " flips";
  }
  else if (tails > heads){
    results.innerHTML = "tails wins: " + tails + " flips";
  }
  else {
    results.innerHTML = "it's a tie!";
  }

  headsresults.innerHTML = "Heads: " + heads;
  tailsresults.innerHTML = "Tails: " + tails;
  console.log(usernumber)
};

button.addEventListener("click", coinflip());
