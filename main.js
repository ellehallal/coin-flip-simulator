
const coinflip = (num) => {
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
    return "heads wins: " + heads + " flips"
  }
  else if (tails > heads){
    return "tails wins: " + tails + " flips";
  }
  else {
    return "it's a tie!";
  }
};
