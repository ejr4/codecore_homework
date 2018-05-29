let alpha_keys = ["a", "b", "c", "d", "e"];
let html = [];
for (let i=0; i < alpha_keys.length; i++) {
  html[html.length] =
  `<button id=${alpha_keys[i]} class="button">` + alpha_keys[i] + `</button>`;
}
$("#key-script-section").append("HOHOHO");