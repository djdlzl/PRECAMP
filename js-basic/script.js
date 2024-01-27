const messageContainer = document.getElementById("d-day-message");
const container = document.getElementById("d-day-container");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";

const dateFormMaker = function () {
  const inputYear = document.getElementById("target-year-input").value;
  const inputMonth = document.getElementById("target-month-input").value;
  const inputDay = document.getElementById("target-day-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDay}`;
  console.log(dateFormat);
  return dateFormat;
};

const countMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  console.log(remaining);
  // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
  if (remaining <= 0) {
    console.log("타이머가 종료 되었습니다.");
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    return;
  } else if (isNaN(remaining)) {
    console.log("유효한 시간대가 아닙니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    return;
  }
  // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
  //   const remainingDate = Math.floor(remaining / 3600 / 24);
  //   const remainingHour = Math.floor((remaining / 3600) % 24);
  //   const remainingMinute = Math.floor((remaining / 60) % 60);
  //   const remainingSecond = Math.floor(remaining % 60);

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor((remaining / 3600) % 24),
    remainingMinute: Math.floor((remaining / 60) % 60),
    remainingSecond: Math.floor(remaining % 60),
  };

  //   const days = document.getElementById("days");
  //   const hours = document.getElementById("hours");
  //   const min = document.getElementById("minutes");
  //   const sec = document.getElementById("seconds");
  const documentArr = ["days", "hours", "minutes", "seconds"];
  const timeKeys = Object.keys(remainingObj);

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }

  //   const documentObj = {
  //     days: document.getElementById("days"),
  //     hours: document.getElementById("hours"),
  //     min: document.getElementById("minutes"),
  //     sec: document.getElementById("seconds"),
  //   };
};

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  countMaker();
  setInterval(countMaker, 1000);
};
