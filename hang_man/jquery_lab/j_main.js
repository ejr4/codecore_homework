$(() => {

// $(".shape").on("mouseenter", e => {
//     const { currentTarget } = e;
//     $(currentTarget).toggleClass("highlight");
//     //console.log("shape entered");
//   });
// $(".shape").on("click", e => {
//     const { currentTarget } = e;
    
//     //console.log("shape entered");
//     const node = $(currentTarget);
//     if (node.hasClass("small")){
//         node.hide();
//     }
//     else if (node.hasClass("medium")) {
//         node.removeClass("medium").addClass("small");
//     }
//     else if (node.hasClass("large")) {
//         node.removeClass("large").addClass("medium");
//     }
    

// });

$("tbody").prepend($(`<tr><td>0</td><td>-</td><tr>`));
// $("#form-1 input:nth-of-type(2)").on("click", e => {
//     const { currentTarget } = e;
//     console.log('found submit-button');
//     $("#form-message").append($("#form-1 input:nth-of-type(1)").val());
//     }
// );
$("#button-1").on("click", e => {
    const { currentTarget } = e;
    $('#green-container').toggle();
});
$("#button-2").on("click", e => {
    const { currentTarget } = e;
    $('#button-message').fadeOut();
});
$("#button-3").on("click", e => {
    const { currentTarget } = e;
    $('#button-message').fadeIn();
});
$("#button-4").on("click", e => {
    const { currentTarget } = e;
    $('#green-container').slideUp();
});

// 2: ^^
// Prepend a row to the table with the columns 0 and -
// When the form's submit button is clicked, append the text input's current value to the form message.
// When Button 1 is clicked, toggle the green container.
// When Button 2 is clicked, fade the Button Message out
// When Button 3 is clicked, fade the Button Message back in.
// When Button 4 is clicked, slide the green container up.

// $(document).on("keydown", e => {
   // const { currentTarget } = e;
    //console.log(e);
//     const { key } = e;
//     console.log(key);
//     if (key == 'g') {
//         $('.grey').toggle();
//     }
//     else if (key == ' '){
//         $('#green-container').append($(`<div class="small blue circle shape"></div>`));
//     }
// });
// $("#form-1 input:nth-of-type(1)").on("input", e => {
//     const { currentTarget } = e;
    
//     let curent_form_txt = $("#form-1 input:nth-of-type(1)").val();
//     let remaining = 14 - curent_form_txt.length;
//     console.log(remaining);
//     let displaymsg = `${remaining} characters remaining`;
//     $("#form-message").text(displaymsg);
//     }
// );
// $("#form-1").on("submit", e => {
//     const { currentTarget } = e;
//     let current_form_txt = $("#form-1 input:nth-of-type(1)").val();
//     //let remaining = 14 - curent_form_txt.length;
//     //console.log(curent_form_txt);
//     //let displaymsg = `${remaining} characters remaining`;
//     if (current_form_txt == "red") {
//         $(".shape.red").toggle();
//         $("#form-message").text("toggled red");
//     } 
//     else if (current_form_txt == "grey") {
//         $(".shape.grey").toggle();
//         $("#form-message").text("toggled grey");
//     } 
//     else if (current_form_txt == "blue") {
//         $(".shape.blue").toggle();
//         $("#form-message").text("toggled blue");
//     } 
//     else if (current_form_txt == "green") {
//         $(".shape.green").toggle();
//         $("#form-message").text("toggled green");
//     } 
//     else if (current_form_txt == "black") {
//         $(".shape.black").toggle();
//         $("#form-message").text("toggled black");
//     } 
//     else {
//         $("#form-message").text("not a valid color");
//     }
//     $("#form-1 input:nth-of-type(1)").val("");
//     //$("#form-message").text(displaymsg);
    
//     }
// );

//  pt3 ^^^
/*And, the jQuery lab continues...

When the g key is pressed, toggle all gray shapes.
When the spacebar key is pressed, append a small blue circle to the green container.
Make the Form Message show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").
 
*/
$('#form-1 > input[type=text]').on("input", () => {
    let string = $('#form-1 > input[type=text]').val();
    function reverse(string) {
        return string.split('').reverse().join('');
    }
    let backwards = reverse(string);
    $("#form-message").text(backwards);
}
);
// with delegated click handler
$('#orange-container').on('click', '.shape.red', function(event) {
    $(this).remove();
});
// $('#orange-container').on('click', '.shape.red', function() {
// 	$(this).remove();
// });
//vs without 
// $('#orange-container .shape.red').on('click', function() {
//     $(this).remove();
// });

});