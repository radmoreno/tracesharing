// Highlight items once they are in focus //

// Brief explanation: when viewport intersects a div that's in view, the coresponding menu item on the left sticky menu gets highlighted. When the user scrolls down and intersects the next item, the next item in the menu also gets highlighted. 

// For the HTML menu items, there are two H6 elements, one over the other with absolute position: one with normal text, the other with bold text. On switch, both get classes added that turn up/down the opacity to the respective element. This creates a visual illusion that the item is highlighted.

const stickyMenu = document.getElementById('cuprins');
const div1 = document.getElementById('localizare');
const div2 = document.getElementById('monitorizare');
const div3 = document.getElementById('taxa');
const div4 = document.getElementById('tracesharing');
const div5 = document.getElementById('instalare');

var h1 = document.getElementsByClassName('point')[0];
var h2 = document.getElementsByClassName('point')[1];
var h3 = document.getElementsByClassName('point')[2];
var h4 = document.getElementsByClassName('point')[3];
var h5 = document.getElementsByClassName('point')[4];

var bold1 = document.getElementsByClassName('null1')[0];
var bold2 = document.getElementsByClassName('null')[0];
var bold3 = document.getElementsByClassName('null')[1];
var bold4 = document.getElementsByClassName('null')[2];
var bold5 = document.getElementsByClassName('null')[3];

// First Observer

const options1 = {
    rootMargin: "-420px 0px 0px 0px"
};

const divOneObserver = new IntersectionObserver
(function(
    entries,
    divOneObserver
)   {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            bold1.classList.add('active');
            h1.classList.add('inactive');
        } else {
            bold1.classList.remove('active')
            h1.classList.remove('inactive');
        }
    })
}, options1);

// Second Observer

const options2 = {
    rootMargin: "-420px 0px -310px 0px"
};

const divTwoObserver = new IntersectionObserver
(function(
    entries,
    divTwoObserver
)   {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            bold2.classList.add('active');
            h2.classList.add('inactive');
        } else {
            bold2.classList.remove('active')
            h2.classList.remove('inactive');
        }
    })
}, options2);

// Third Observer

const options3 = {
    rootMargin: "-420px 0px -310px 0px"
};

const divThreeObserver = new IntersectionObserver
(function(
    entries,
    divThreeObserver
)   {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            bold3.classList.add('active');
            h3.classList.add('inactive');
        } else {
            bold3.classList.remove('active')
            h3.classList.remove('inactive');
        }
    })
}, options3);

// Fourth Observer

const options4 = {
    rootMargin: "-420px 0px -310px 0px"
};

const divFourObserver = new IntersectionObserver
(function(
    entries,
    divFourObserver
)   {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            bold4.classList.add('active');
            h4.classList.add('inactive');
        } else {
            bold4.classList.remove('active')
            h4.classList.remove('inactive');
        }
    })
}, options4);

// Fifth Observer

const options5 = {
    rootMargin: "0px 0px -310px 0px"
};

const divFiveObserver = new IntersectionObserver
(function(
    entries,
    divFiveObserver
)   {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            bold5.classList.add('active');
            h5.classList.add('inactive');
        } else {
            bold5.classList.remove('active')
            h5.classList.remove('inactive');
        }
    })
}, options5);

divOneObserver.observe(div1);
divTwoObserver.observe(div2);
divThreeObserver.observe(div3);
divFourObserver.observe(div4);
divFiveObserver.observe(div5);