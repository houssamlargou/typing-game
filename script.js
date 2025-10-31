const words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, odio perspiciatis animi recusandae debitis mollitia, ex culpa qui natus id asperiores esse hic sequi? Architecto consequatur eveniet quam illum! ";

let num;
document.querySelector(".num").addEventListener("click", function (e) {
  num = e.target.value;
});

const wordsSplit = words.split(" ");
const wordsCount = wordsSplit.length;
function randomWords() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return wordsSplit[randomIndex];
}

function formatWord(word) {
  return `<div class="word">${word}<div>`;
}

function newGame() {
  document.querySelector(".words").innerHTML = "";
  for (let i = 0; i < num; i++) {
    document.querySelector(".words").innerHTML += formatWord(randomWords());
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  newGame();
});
