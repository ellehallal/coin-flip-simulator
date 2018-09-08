let number = document.getElementbyId("number")
let button = document.getElementbyId("flipbutton")
let results = document.getElementbyId("results")
let headsresults = document.getElementbyId("headsresults")
let tailsresults = document.getElementbyId("tailsresults")


const coinflip = (number) => {
  let tails = 0
  let heads = 0

  for(let i = 0; i < num; i++){
    let randomNumber = Math.floor(Math.random() * 2);
    console.log("random " + randomNumber);

    if(randomNumber === 0){
      heads++;
      console.log("heads:" + heads);
    }
    else{
      tails++;
      console.log("tails:" + tails)
    }
  }

  if(heads > tails){
    results.innerHTML =  "heads wins: " + heads + " flips"
  }
  else if (tails > heads){
    results.innerHTML = "tails wins: " + tails + " flips";
  }
  else {
    results.innerHTML = "it's a tie!";
  }

  headsresults.innerHTML = "Heads: " + heads;
  tailsresults.innerHTML = "Tails: " + tails;
};
