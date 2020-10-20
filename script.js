var hamburger = document.getElementById("hamburger");
var navcontent = document.getElementById("navmobilecontent");
var page = document.getElementById("maincontent");
var overlay = document.getElementsByClassName("overlay-mobile")[0];

// Open/Closing Mobile Menu Content on hamburger click

hamburger.addEventListener('click', function(){
    navcontent.classList.toggle('active');
    hamburger.classList.toggle('fa-times');
    hamburger.classList.toggle('fa-bars');
    overlay.classList.toggle('active-overlay');
});

// Closing Mobile Menu Content when clicking anywhere on the page

page.addEventListener('click', function(){
    if (navcontent.classList.contains("active") === true) {
        navcontent.classList.remove('active');
        hamburger.classList.toggle('fa-times');
        hamburger.classList.toggle('fa-bars');
        overlay.classList.remove('active-overlay');
    }
});

// LOADER

window.addEventListener('load', () =>{
    const loader = document.querySelector('.load-wrapper');
    loader.classList.add('loader-finished');
  });

// NAVBAR CHANGE

const header = document.getElementById('navcontainer');
const sectionOne = document.getElementById('intersector');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
)   {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
