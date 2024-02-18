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
const buttoncard1 = document.querySelector("#button-card-1");
const textcard1 = document.querySelector('#text-card-1');
const imgcard1 = document.querySelector('#img-card-1');

function random_card_1() {
  var random_number = Math.floor(Math.random() * 7) + 1;

  switch (random_number) {
    case 1:
      src = '../img/the-turkey.jpg';
      text = 'The turkey';
      break;
    case 2:
      src = '../img/mom.jpg';
      text = 'Mon';
      break;
    case 3:
      src = '../img/dad.jpg';
      text = 'Dad';
      break;
    case 4:
      src = '../img/the-dog.jpg';
      text = 'The dog';
      break;
    case 5:
      src = '../img/the-teacher.jpg';
      text = 'The teacher';
      break;
    case 6:
      src = '../img/the-elephant.jpg';
      text = 'The elephant';
      break;
    case 7:
      src = '../img/the-cat.jpg';
      text = 'The cat';
      break;  
    default:
      console.log("NAN");
  }

  return {src, text};
}

buttoncard1.onclick = () => {
  const {src, text}  = random_card_1();
  console.log(src);
  console.log(text);

  imgcard1.src = src;
  textcard1.innerText = text;
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
      src = '../img/sat-on.jpg';
      text = 'sat on';
      break;
    case 2:
      src = '../img/ate.jpg';
      text = 'ate';
      break;
    case 3:
      src = '../img/danced-with.jpg';
      text = 'danced with';
      break;
    case 4:
      src = '../img/saw.jpg';
      text = 'saw';
      break;
    case 5:
      src = "../img/doesnt-like.jpg"
      text = "doesn't like";
      break;
    case 6:
      src = '../img/kissed.jpg';
      text = 'kissed';
      break;
    default:
      console.log("NAN");
  }

  return {src, text};
}

buttoncard2.onclick = () => {
  const {src, text}  = random_card_2();
  console.log(src);
  console.log(text);

  imgcard2.src = src;
  textcard2.innerText = text;
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
      src = '../img/a-funny.jpg';
      text = 'a funny';
      break;
    case 2:
      src = '../img/a-scary.jpg';
      text = 'a scary';
      break;
    case 3:
      src = '../img/a-goofy.jpg';
      text = 'a goofy';
      break;
    case 4:
      src = '../img/a-slimy.jpg';
      text = 'a slimy';
      break;
    case 5:
      src = '../img/a-barking.jpg';
      text = 'a barking';
      break;
    case 6:
      src = '../img/a-fat.jpg';
      text = 'a fat';
      break;
    default:
      console.log("NAN");
  }

  return {src, text};
}

buttoncard3.onclick = () => {
  const {src, text}  = random_card_3();
  console.log(src);
  console.log(text);

  imgcard3.src = src;
  textcard3.innerText = text;
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
      src = '../img/goat.jpg';
      text = 'goat';
      break;
    case 2:
      src = '../img/monkey.jpg';
      text = 'monkey';
      break;
    case 3:
      src = '../img/fish.jpg';
      text = 'fish';
      break;
    case 4:
      src = '../img/cow.jpg';
      text = 'cow';
      break;
    case 5:
      src = '../img/frog.jpg';
      text = 'frog';
      break;
    case 6:
      src = '../img/bug.jpg';
      text = 'bug';
      break;
    case 7:
      src = '../img/worm.jpg';
      text = 'worm';
      break;  
    default:
      console.log("NAN");
  }

  return {src, text};
}

buttoncard4.onclick = () => {
  const {src, text}  = random_card_4();
  console.log(src);
  console.log(text);

  imgcard4.src = src;
  textcard4.innerText = text;
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
      src = '../img/on-the-moon.jpg';
      text = 'on the moon';
      break;
    case 2:
      src = '../img/on-the-chair.jpg';
      text = 'on the chair';
      break;
    case 3:
      src = '../img/in-my-spaghetti.jpg';
      text = 'in my spaghetti';
      break;
    case 4:
      src = '../img/in-my-soup.jpg';
      text = 'in my soup';
      break;
    case 5:
      src = '../img/on-the-grass.jpg';
      text = 'on the grass';
      break;
    case 6:
      src = '../img/in-my-shoes.jpg';
      text = 'in my shoes';
      break;  
    default:
      console.log("NAN");
  }

  return {src, text};
}

buttoncard5.onclick = () => {
  const {src, text}  = random_card_5();
  console.log(src);
  console.log(text);

  imgcard5.src = src;
  textcard5.innerText = text;
};
