let you_win_html = `<h1>You win!!</h1>`;

let alph = [];
let a_offset = 'a'.charCodeAt(0);
for (let i = a_offset; i < a_offset+ 26; i++){

  alph.push( String.fromCharCode (i) ) ;
}



//let alpha_keys = ["a", "b", "c", "d", "e"];
let alpha_keys = alph;
let html = [];
for (let i=0; i < alpha_keys.length; i++) {
  let this_letter = alpha_keys[i];
  html[html.length] =
  `<button id=${this_letter} class="button">`+this_letter+`</button>`;
  $("#alpha-keys-div").append(html[i]);
  $(`#${this_letter}`).on("click", event => {
    const { currentTarget } = event;    
    $(currentTarget).addClass("button-blue");
    
    document.querySelectorAll(`.button-${this_letter}`).forEach( node => {
      node.classList.add('button-red');
      node.classList.remove('button-blank');
    });
    if (document.querySelectorAll(".button-blank").length == 0){
      $("#alpha-keys-div").append(you_win_html);
    }
  });
}
//$("#key-script-section").append(html);

