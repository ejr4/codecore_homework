let snake_snd = new Audio("assets/snakehiss.wav"); // buffers automatically when created

let wrong_guesses = 0;
let alph = [];
let a_offset = 'a'.charCodeAt(0);
for (let i = a_offset; i < a_offset+ 26; i++){
  alph.push( String.fromCharCode (i) ) ;
}
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
    let these_nodes = document.querySelectorAll(`.button-${this_letter}`);
    if ( these_nodes.length == 0 ) {
      wrong_guesses ++;
      $("#hanging-man-display").html(
        `<img src="assets/pic${wrong_guesses}.png"></img>`
      );
      snake_snd.play();
    }
    else {
    these_nodes.forEach( node => {
      node.classList.add('button-red');
      node.classList.remove('button-blank');
    });
    }
    if (document.querySelectorAll(".button-blank").length == 0){
      alert("You live!!");
      restart_game();
    }
    if (wrong_guesses > 6) {
      alert("You will die for guessing such silly letters!");
      restart_game();      
    }
  });
}
//$("#key-script-section").append(html);