const words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, odio perspiciatis animi recusandae debitis mollitia, ex culpa qui natus id asperiores esse hic sequi? Architecto consequatur eveniet quam illum! ";

let num;

const wordsSplit = words.split(" ");
const wordsCount = wordsSplit.length;

function randomWords() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return wordsSplit[randomIndex];
}

function littersHandler(litters) {
  let letter = "";
  for (let i = 0; i < litters.length; i++) {
    letter += `<span class="litter">${litters[i]}</span>`;
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

let littersCount = 0;
document.addEventListener("keypress", function (e) {
  let littersHolder = [];
  document.querySelectorAll(".litter").forEach((el) => {
    littersHolder.push(el);
  });
  if (e.key == littersHolder[littersCount].textContent) {
    littersHolder[littersCount].style.color = "green";
    console.log(true);
    littersCount++;
  } else {
    littersHolder[littersCount].style.color = "red";
    console.log(false);
    littersCount++;
  }
});
