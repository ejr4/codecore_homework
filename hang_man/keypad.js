

let alph = [];
let a_offset = 'a'.charCodeAt(0);
for (let i = a_offset; i < a_offset+ 26; i++){

  alph.push( String.fromCharCode (i) ) ;
}



//let alpha_keys = ["a", "b", "c", "d", "e"];
let alpha_keys = alph;
let html = [];
for (let i=0; i < alpha_keys.length; i++) {
  html[html.length] =
  `<button id=${alpha_keys[i]} class="button">`+alpha_keys[i]+`</button>`;
  $("#key-script-section").append(html[i]);
  $(`#${alpha_keys[i]}`).on("click", event => {
    const { currentTarget } = event;    
    $(currentTarget).addClass("button-blue");
  });
}
//$("#key-script-section").append(html);
