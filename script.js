const words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, odio perspiciatis animi recusandae debitis mollitia, ex culpa qui natus id asperiores esse hic sequi? Architecto consequatur eveniet quam illum! ";

let num;

const wordsSplit = words.split(" ");
const wordsCount = wordsSplit.length;

function randomWords() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return wordsSplit[randomIndex];
}

console.log(littersHandler(randomWords().split("")));

function littersHandler(litters) {
  let letter = "";
  console.log(litters);
  console.log(litters.length);
  for (let i = 0; i < litters.length; i++) {
    letter += `<span>${litters[i]}</span>`;
  }
  return letter;
}

littersHandler(randomWords().split(""));

function formatWord(word) {
  return `<div class="word">${word}<div>`;
}

document.querySelector(".num").addEventListener("change", function (e) {
  num = e.target.value;
});

document.querySelector(".btn").addEventListener("click", function () {
  newGame();
});

function newGame() {
  document.querySelector(".words").innerHTML = "";
  for (let i = 0; i < num; i++) {
    document.querySelector(".words").innerHTML += formatWord(
      littersHandler(randomWords().split(""))
    );
    console.log(randomWords());
  }
}

document.querySelector(".words").addEventListener("click", function (e) {
  //   console.log(e.target);
  //   document.querySelectorAll(".word").forEach((el) => {
  //     el.addEventListener("click", function (e) {
  //       console.log(e.target);
  //     });
  //   });
});
