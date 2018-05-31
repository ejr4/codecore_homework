function restart_game() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.location.reload();
        resolve();
      }, 2000 );
  });
}


$(() => {
$(document).on("keydown", e => {
   const { currentTarget } = e;
    console.log(e);
    const { key } = e;
    console.log(key);
    let these_nodes = document.querySelectorAll(`.button-${key}`);
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
      let keys_matching_keydown = document.querySelectorAll(`#${key}`);
      keys_matching_keydown.forEach( node =>
        node.classList.add('button-blue'));

      if (document.querySelectorAll(".button-blank").length == 0){
        alert("You live!!");
        restart_game();
      }
      if (wrong_guesses > 6) {
        alert("You will die for guessing such silly letters!");
        restart_game();
        //document.location.reload();
      }
});

});

////////////
// const { currentTarget } = event;    
//     $(currentTarget).addClass("button-blue");
//     let these_nodes = document.querySelectorAll(`.button-${this_letter}`);
    