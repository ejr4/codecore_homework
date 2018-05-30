
let letters = word.split('');
let word_html = [];
for (let i=0; i < letters.length; i++) {
  word_html[word_html.length] =
  `<button id="b-${letters[i]}-i" class="button-display-${letters[i]}">`+letters[i]+`</button>`;
}

$("#word-display-div").append(word_html);
