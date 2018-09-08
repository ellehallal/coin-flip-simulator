
const coinflip = (num) => {
  let tails = 0
  let heads = 0

  for(let i = 0; i <= num; i++){
    let randomNumber = Math.floor(Math.random() * 2);

    if(randomNumber = 0){
      heads++;
    }
    else{
      tails++
    }
  }
}
