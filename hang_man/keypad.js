let wrong_guesses = 0;
let alpha_keys = [];
let html = [];

let a_offset = 'a'.charCodeAt(0);
for (let i = a_offset; i < a_offset+ 26; i++){
  alpha_keys.push( String.fromCharCode (i) ) ;
}
for (let i=0; i < alpha_keys.length; i++) {
  let this_letter = alpha_keys[i];
  html[html.length] =
  `<button id=${this_letter} class="button">`+this_letter+`</button>`;
  $("#alpha-keys-div").append(html[i]);
  
  $(`#${this_letter}`).on("click", event => {
    const { currentTarget } = event;    
    $(currentTarget).addClass("button-blue");
    check_for_letter(this_letter);
    end_game_check();
  });
}
