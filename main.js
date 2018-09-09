let number = document.getElementById("number");
let alert = document.getElementById("alert");
let button = document.getElementById("flipbutton");
let reset = document.getElementById("resetbutton");
let results = document.getElementById("results");
let headsresults = document.getElementById("headsresults");
let tailsresults = document.getElementById("tailsresults");

button.addEventListener("click", function() {
  let tails = 0;
  let heads = 0;
  let usernumber = parseInt(number.value);
  console.log(usernumber);

  if (usernumber < 1 || usernumber > 1000) {
    alert.innerHTML = "Please enter a number between 1 - 1000";
    alert.classList.add("alert");
    setTimeout(function () {
      alert.innerHTML = "";
      alert.classList.remove("alert")
    }, 1500);
  }

  else {
    for (let i = 0; i < usernumber; i++) {
      let randomNumber = Math.floor(Math.random() * 2);
      console.log("random " + randomNumber);

      if (randomNumber === 0) {
        heads++;
        console.log("heads:" + heads);
      } else {
        tails++;
        console.log("tails:" + tails);
      }
    }

    if (heads > tails) {
      results.innerHTML = "Heads wins with " + heads + " flips!";
    } else if (tails > heads) {
      results.innerHTML = "Tails wins with " + tails + " flips!";
    } else {
      results.innerHTML = "It's a tie!";
    }

    headsresults.innerHTML = "Heads: " + heads;
    tailsresults.innerHTML = "Tails: " + tails;
    console.log(usernumber)
  }
});

reset.addEventListener("click", function () {
  number.value = 0;
});
