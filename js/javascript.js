/*
CSS Name: Story Maker
Author: Anndriu U.
Description: Using HTML, CSS, and JavaScript, emulate the user experience of the popular children’s toy, the Mattel® ‘See ‘N’ Say Storymaker’. 
Version: 1.0
Image attribution:
*/

/*
 Button 1
*/


// image selector and button selector
var buttoncard1 = document.querySelector('#button-card-1');
var textcard1 = document.querySelector('#text-card-1');
var imgcard1 = document.querySelector('#img-card-1');

// Event
buttoncard1.addEventListener('click', function() {
  imgcard1.src = '../img/the-turkey.jpg';
  textcard1.innerText = '¡Texto modificado!';
});
