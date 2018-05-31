let snake_snd = new Audio("assets/snakehiss.wav");
let win_snd = new Audio("assets/you_win.wav");
let lose_snd = new Audio("assets/you_lose.wav");
let correct_snd = new Audio("assets/aspirator.wav");

function restart_game() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.location.reload();
        resolve();
      }, 2000 );
  });
}
function check_for_letter(key) {
  let matching_nodes = document.querySelectorAll(`.button-${key}`);
    if ( matching_nodes.length == 0 ) {
        wrong_guesses ++;
        pic_change(wrong_guesses);
        snake_snd.play();
      }
      else {
      matching_nodes.forEach( node => {
        node.classList.add('button-red');
        node.classList.remove('button-blank');
      });
      }
}
function you_win() {
  win_snd.play();
  pic_change("win");
  alert("Congratulations!!");
  restart_game();
}
function you_lose() {
  lose_snd.play();
  alert("HAHAHAHAA!!");
  restart_game();
}
function pic_change(pic_selector) {
  $("#hanging-man-display").html(
    `<img src="assets/pic${pic_selector}.png"></img>`
  );
}
function end_game_check() {
  if (document.querySelectorAll(".button-blank").length == 0){
    you_win();
  }
  if (wrong_guesses > 6) {
    you_lose();   
  }
}

$(() => {
$(document).on("keydown", e => {
  const { currentTarget } = e;
  const { key } = e;
    
  check_for_letter(key);
    
  let keys_matching_keydown = document.querySelectorAll(`#${key}`);
  keys_matching_keydown.forEach( node =>
    node.classList.add('button-blue'));

  end_game_check();
});

});