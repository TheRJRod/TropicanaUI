const dot1 = document.querySelector('.dot');
const dot2 = document.querySelector('.dot2');
// Orange Selectors
const orange = document.querySelector('.orange');
const fullOrange = document.querySelector('.full-orange');
const orangeSlice = document.querySelector('.orange-slice');
const orangeJuice = document.querySelector('.juice');
// Strawberry Selectors
const strawberry = document.querySelector('.strawberry');
const strawberryJuice = document.querySelector('.strawberry-juice');
const fullStrawberry = document.querySelector('.full-strawberry');
// Leaf Selectors
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const leaf3 = document.querySelector('.leaf3');
const leaf4 = document.querySelector('.leaf4');

// Element Selectors
const bodyColor = document.querySelector('.body-color');
const hero = document.querySelector('.hero');

// Resets Scroll Position to keep page formated correctly
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// Dot Event Listener

dot1.addEventListener('click', () => {
  // Strawberry Transition Out
  strawberryJuice.style.transform = 'translate(1200px)';
  strawberry.style.transform = 'translate(1700px)';
  fullStrawberry.style.transform = 'translate(1600px)';

  // Orange Transition In
  orange.style.transform = 'translate(0px)';
  fullOrange.style.transform = 'translate(0px)';
  orangeSlice.style.transform = 'translate(0px)';
  orangeJuice.style.transform = 'translate(0px)';

  // Leafs rotate
  leaf1.style.transform = 'rotate(0deg)'
  leaf2.style.transform = 'rotate(-50deg)'
  leaf3.style.transform = 'rotate(-80deg)'
  leaf4.style.transform = 'rotate(-80deg)'

  // Background Color 
  bodyColor.style.backgroundColor = 'rgb(206, 158, 1)';
  hero.style.backgroundColor = 'rgb(206, 158, 1)';

  dot1.classList.add('colorClass');
  dot2.classList.remove('colorClass');
})

dot2.addEventListener('click', () => {
  // Strawberry Transition In
  strawberryJuice.style.transform = 'translate(0px)';
  strawberry.style.transform = 'translate(0px)';
  fullStrawberry.style.transform = 'translate(0px)';

  // Orange Transition Out
  orange.style.transform = 'translate(-1600px)';
  fullOrange.style.transform = 'translate(-1400px)';
  orangeSlice.style.transform = 'translate(-1600px)';
  orangeJuice.style.transform = 'translate(-1200px)';

  // Leafs rotate
  leaf1.style.transform = 'rotate(-50deg)'
  leaf2.style.transform = 'rotate(0deg)'
  leaf3.style.transform = 'rotate(0deg)'
  leaf4.style.transform = 'rotate(0deg)'

  // Background Color 
  bodyColor.style.backgroundColor = 'Red';
  hero.style.backgroundColor = 'Red';

  // if (dot2.classList.contains('colorClass') === false) {
  //   dot2.classList.add('colorClass');
  // }

  dot2.classList.add('colorClass');
  dot1.classList.remove('colorClass');
});




// Juice to spotlight

orangeJuice.addEventListener('click', () => {
  orangeJuice.style.transform = 'translate(-550px, 800px) rotate(-20deg)';
  const showcase = document.querySelector('.showcase');
  showcase.scrollIntoView({behavior:'smooth'});

});

// Juice to spotlight on scroll


window.addEventListener('scroll', (e) => {
  if (dot1.classList.contains('colorClass') === true) {
 
  let scroll = this.scrollY;
  
  if(scroll > 100) {
    orangeJuice.style.transform = 'translate(-550px, 800px) rotate(-20deg)';
  const spotlight = document.querySelector('.spotlight');
  
  } else {
    orangeJuice.style.transform = 'translate(0%, 0%) rotate(0deg)';
  }
  }
});




// Mixology Info

const drink1 = document.querySelector('.drink1');
const drink2 = document.querySelector('.drink2');
const drink3 = document.querySelector('.drink3');
// Slide in Drink Info
const drinkinfo1 = document.querySelector('.drink-info1');
const drinkinfo2 = document.querySelector('.drink-info2');
const drinkinfo3 = document.querySelector('.drink-info3');

function hide(shown, hidden1, hidden2, drinkinfo) {
  shown.addEventListener('click', () => {
  hidden1.style.opacity = '0';
  hidden2.style.opacity = '0';
  drinkinfo.style.translate = '-50% 5%'
  });
  

  
}

function show(hidden1, hidden2, drinkinfo, shown) {
  const exit = document.querySelectorAll('.exit');
  for(let i = 0; i < exit.length; i++) {
    exit[i].addEventListener('click', () => {
      hidden1.style.opacity = '1';
      hidden2.style.opacity = '1';
    drinkinfo.style.translate = '1400px -50%';
    shown.style.transform = 'translate(0px)';
     } );
  }}
//   exit.addEventListener('click', () => {
//     hidden1.style.opacity = '1';
//     hidden2.style.opacity = '1';
//   drinkinfo.style.translate = '1400px -50%';
//    } );
// }
  
const branch1 = document.querySelector('.branch1');
const branch2 = document.querySelector('.branch2'); 
window.addEventListener('scroll', (e) => {
  let scroll = this.scrollY;
  
  if(scroll > 1600) {
    
    branch1.style.left = '104%';
    branch2.style.left = '-88%';
  
  
  } else {
    branch1.style.left = '34%';
    branch2.style.left = '-28%';
  }

});


// Slide drinks
drink2.addEventListener('click', () => {
  drink2.style.transform = 'translate(-440px)'
})

drink3.addEventListener('click', () => {
  drink3.style.transform = 'translate(-840px)'
})




hide(drink1,drink2,drink3,drinkinfo1);
hide(drink2,drink1,drink3,drinkinfo2);
hide(drink3,drink2,drink1,drinkinfo3);

show(drink2,drink3,drinkinfo1, drink1);
show(drink1,drink3,drinkinfo2, drink2);
show(drink1,drink2,drinkinfo3, drink3);




