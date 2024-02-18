/*
CSS Name: Story Maker
Author: Anndriu U.
Description: Using HTML, CSS, and JavaScript, emulate the user experience of the popular children’s toy, the Mattel® ‘See ‘N’ Say Storymaker’. 
Version: 1.0
Image attribution: Anndriu U.
*/

/*
 Button 1
*/
const buttoncard1 = document.querySelector("#button-card-1");
const textcard1 = document.querySelector('#text-card-1');
const imgcard1 = document.querySelector('#img-card-1');

function random_card_1() {
  var random_number = Math.floor(Math.random() * 7) + 1;

  switch (random_number) {
    case 1:
      src1 = '../img/the-turkey.jpg';
      text1 = 'The turkey';
      break;
    case 2:
      src1 = '../img/mom.jpg';
      text1 = 'Mon';
      break;
    case 3:
      src1 = '../img/dad.jpg';
      text1 = 'Dad';
      break;
    case 4:
      src1 = '../img/the-dog.jpg';
      text1 = 'The dog';
      break;
    case 5:
      src1 = '../img/the-teacher.jpg';
      text1 = 'The teacher';
      break;
    case 6:
      src1 = '../img/the-elephant.jpg';
      text1 = 'The elephant';
      break;
    case 7:
      src1 = '../img/the-cat.jpg';
      text1 = 'The cat';
      break;  
    default:
      console.log("NAN");
  }

  return {src1, text1};
}

buttoncard1.onclick = () => {
  // Gets a new path for the image and new text.
  const {src1, text1}  = random_card_1();
  // Updates the card image and card text.
  imgcard1.src = src1;
  textcard1.innerText = text1;
};

/*
 Button 2
*/
const buttoncard2 = document.querySelector("#button-card-2");
const textcard2 = document.querySelector('#text-card-2');
const imgcard2 = document.querySelector('#img-card-2');

function random_card_2() {
  var random_number = Math.floor(Math.random() * 6) + 1;

  switch (random_number) {
    case 1:
      src2 = '../img/sat-on.jpg';
      text2 = 'sat on';
      break;
    case 2:
      src2 = '../img/ate.jpg';
      text2 = 'ate';
      break;
    case 3:
      src2 = '../img/danced-with.jpg';
      text2 = 'danced with';
      break;
    case 4:
      src2 = '../img/saw.jpg';
      text2 = 'saw';
      break;
    case 5:
      src2 = "../img/doesnt-like.jpg"
      text2 = "doesn't like";
      break;
    case 6:
      src2 = '../img/kissed.jpg';
      text2 = 'kissed';
      break;
    default:
      console.log("NAN");
  }

  return {src2, text2};
}

buttoncard2.onclick = () => {
  // Gets a new path for the image and new text.
  const {src2, text2}  = random_card_2();
  // Updates the card image and card text.
  imgcard2.src = src2;
  textcard2.innerText = text2;
};

/*
 Button 3
*/
const buttoncard3 = document.querySelector("#button-card-3");
const textcard3 = document.querySelector('#text-card-3');
const imgcard3 = document.querySelector('#img-card-3');

function random_card_3() {
  var random_number = Math.floor(Math.random() * 6) + 1;

  switch (random_number) {
    case 1:
      src3 = '../img/a-funny.jpg';
      text3 = 'a funny';
      break;
    case 2:
      src3 = '../img/a-scary.jpg';
      text3 = 'a scary';
      break;
    case 3:
      src3 = '../img/a-goofy.jpg';
      text3 = 'a goofy';
      break;
    case 4:
      src3 = '../img/a-slimy.jpg';
      text3 = 'a slimy';
      break;
    case 5:
      src3 = '../img/a-barking.jpg';
      text3 = 'a barking';
      break;
    case 6:
      src3 = '../img/a-fat.jpg';
      text3 = 'a fat';
      break;
    default:
      console.log("NAN");
  }

  return {src3, text3};
}

buttoncard3.onclick = () => {
  // Gets a new path for the image and new text.
  const {src3, text3}  = random_card_3();
  // Updates the card image and card text.
  imgcard3.src = src3;
  textcard3.innerText = text3;
};

/*
 Button 4
*/
const buttoncard4 = document.querySelector("#button-card-4");
const textcard4 = document.querySelector('#text-card-4');
const imgcard4 = document.querySelector('#img-card-4');

function random_card_4() {
  var random_number = Math.floor(Math.random() * 7) + 1;

  switch (random_number) {
    case 1:
      src4 = '../img/goat.jpg';
      text4 = 'goat';
      break;
    case 2:
      src4 = '../img/monkey.jpg';
      text4 = 'monkey';
      break;
    case 3:
      src4 = '../img/fish.jpg';
      text4 = 'fish';
      break;
    case 4:
      src4 = '../img/cow.jpg';
      text4 = 'cow';
      break;
    case 5:
      src4 = '../img/frog.jpg';
      text4 = 'frog';
      break;
    case 6:
      src4 = '../img/bug.jpg';
      text4 = 'bug';
      break;
    case 7:
      src4 = '../img/worm.jpg';
      text4 = 'worm';
      break;  
    default:
      console.log("NAN");
  }

  return {src4, text4};
}

buttoncard4.onclick = () => {
  // Gets a new path for the image and new text.
  const {src4, text4}  = random_card_4();
  // Updates the card image and card text.
  imgcard4.src = src4;
  textcard4.innerText = text4;
};

/*
 Button 5
*/
const buttoncard5 = document.querySelector("#button-card-5");
const textcard5 = document.querySelector('#text-card-5');
const imgcard5 = document.querySelector('#img-card-5');

function random_card_5() {
  var random_number = Math.floor(Math.random() * 6) + 1;

  switch (random_number) {
    case 1:
      src5 = '../img/on-the-moon.jpg';
      text5 = 'on the moon';
      break;
    case 2:
      src5 = '../img/on-the-chair.jpg';
      text5 = 'on the chair';
      break;
    case 3:
      src5 = '../img/in-my-spaghetti.jpg';
      text5 = 'in my spaghetti';
      break;
    case 4:
      src5 = '../img/in-my-soup.jpg';
      text5 = 'in my soup';
      break;
    case 5:
      src5 = '../img/on-the-grass.jpg';
      text5 = 'on the grass';
      break;
    case 6:
      src5 = '../img/in-my-shoes.jpg';
      text5 = 'in my shoes';
      break;  
    default:
      console.log("NAN");
  }

  return {src5, text5};
}

buttoncard5.onclick = () => {
  // Gets a new path for the image and new text.
  const {src5, text5}  = random_card_5();
  // Updates the card image and card text.
  imgcard5.src = src5;
  textcard5.innerText = text5;
};


/*
 Button Surprise
*/
const button_surprise = document.querySelector("#button-surprise");
button_surprise.onclick = () => {
  // Gets a new path for the image and new text.
  const {src1, text1}  = random_card_1();
  const {src2, text2}  = random_card_2();
  const {src3, text3}  = random_card_3();
  const {src4, text4}  = random_card_4();
  const {src5, text5}  = random_card_5();
  // Updates the card image and card text.
  imgcard1.src = src1;
  textcard1.innerText = text1;
  imgcard2.src = src2;
  textcard2.innerText = text2;
  imgcard3.src = src3;
  textcard3.innerText = text3;
  imgcard4.src = src4;
  textcard4.innerText = text4;
  imgcard5.src = src5;
  textcard5.innerText = text5;
};
