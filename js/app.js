
// store all sections in on array
let sections = document.querySelectorAll('section');

// Create Dynamic navBar
sections.forEach(function(section){

    let li = document.createElement("li");
    let link = document.createElement("a");
    let anchorText = document.createTextNode(section.dataset.nav);


    link.setAttribute("class","menu__link");
    //link.setAttribute('href',`#${section.id}`);
    link.appendChild(anchorText);
    li.appendChild(link);
    document.getElementById('navbar__list').appendChild(li);

});

// add active while scrolling to specific section.

window.addEventListener('scroll', () => {

sections.forEach ( section => {
    let high  = window.pageYOffset
    if(high >= 400 && high <= 1000){
        sections[0].setAttribute('class','your-active-class');
        sections[1].removeAttribute('class','your-active-class');
        sections[2].removeAttribute('class','your-active-class');
        sections[3].removeAttribute('class','your-active-class');
    }else if(high >= 1000 && high <= 1600){
        sections[0].removeAttribute('class','your-active-class');
        sections[1].setAttribute('class','your-active-class');
        sections[2].removeAttribute('class','your-active-class');
        sections[3].removeAttribute('class','your-active-class');

    }
    else if(high >= 1600 && high <= 2200){
        sections[0].removeAttribute('class','your-active-class');
        sections[1].removeAttribute('class','your-active-class');
        sections[2].setAttribute('class','your-active-class');
        sections[3].removeAttribute('class','your-active-class');
    }
    else if(high >= 2200 && high <= 2800){
        sections[2].removeAttribute('class','your-active-class');
        sections[3].setAttribute('class','your-active-class');
    }
});
});

// Scroll To Section One
let anchorOne = document.getElementsByClassName('menu__link')[0];
let secOne = document.getElementById('section1');

anchorOne.addEventListener('click', function() {
    secOne.scrollIntoView({behavior:'smooth'});
    //anchorOne.preventDefault();
})

// Scroll To Section Two
let anchorTwo = document.getElementsByClassName('menu__link')[1];
let secTwo = document.getElementById('section2');

anchorTwo.addEventListener('click', function() {
    secTwo.scrollIntoView({behavior:'smooth'});
})
// Scroll To Section Three
let anchorThree = document.getElementsByClassName('menu__link')[2];
let secThree = document.getElementById('section3');

anchorThree.addEventListener('click', function() {
    secThree.scrollIntoView({behavior:'smooth'});
})
// Scroll To Section Four
let anchorFour = document.getElementsByClassName('menu__link')[3];
let secFour = document.getElementById('section4');

anchorFour.addEventListener('click', function() {
    secFour.scrollIntoView({behavior:'smooth'});
})
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
