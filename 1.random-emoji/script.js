const btn = document.querySelector("#emoji");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

btn.addEventListener("mouseover",(even)=>{
    btn.innerHTML =emojis[Math.floor(Math.random()*emojis.length)];
})
