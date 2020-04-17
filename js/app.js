
// dynamic load nav bar

let navarray = [];

let navlist = document.querySelectorAll('section');

for (let i = 0; i < navlist.length; i++){

  navarray.push(`<li><a href="#${navlist[i].id}">${navlist[i].dataset.nav}</a></li>`);

}

document.querySelector('.meunbar').innerHTML= navarray.join(" ");


// Scroll to specified view

const navbarlist = document.querySelectorAll('.meunbar a');


// function to loop through the array

for (let a = 0; a < navbarlist.length; a++){
  navbarlist[a].addEventListener('click', function scrolling(e){

    e.preventDefault();
    const scrollid = e.currentTarget.getAttribute('href');
    document.querySelector(scrollid).scrollIntoView({behavior: "smooth", block: "end"});


})}


// check current active section 
// remove all active state
// add active to current state

let height = window.innerHeight;

let currentsection = null;

document.addEventListener('scroll', function checkcurrent(){

  for (var i = 0; i < navlist.length; i++){

    newlocation = navlist[i].getBoundingClientRect();


    if(Math.abs(newlocation.y) <= 200) {

      // height = Math.abs(location.top);

      console.log(Math.abs(newlocation.top));

      for (let j = 0; j < navlist.length; j++){
        navlist[j].classList.remove('activelist');


      }

      for (let k = 0; k < navbarlist.length; k++){
        navbarlist[k].id = '';

      }



      currentsection = navlist[i];
      currentsection.classList.add('activelist');
      navbarlist[i].id = 'highlighted';

    }
  }

})






