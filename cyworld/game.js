const startWord = () => {
  let word = document.getElementById("word").innerText;
  let enterWord = document.getElementById("myword").value;

  let lastWord = word[word.length - 1];
  let firstWord = enterWord[0];
  if (lastWord === firstWord) {
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = enterWord;
    document.getElementById("myword").value = "";
  } else {
    document.getElementById("result").innerText = "땡!";
  }
};
