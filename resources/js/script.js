$(document).ready(function() {

    /*Adding Sticky Navigation*/
    $(".js--about-section").waypoint(function(direction) {
        if (direction === "down") {
            $(".nav").addClass('sticky-nav animate__animated animate__fadeInDown');
        } else {
            $(".nav").removeClass('sticky-nav animate__animated animate__fadeInDown');
        }
    });

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});
/* Hamburger menu button */
const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]
const navFull = document.getElementsByClassName('nav')[0]
const navBar = document.getElementsByClassName('toggle-btn')[0]
const headerText = document.getElementsByClassName('header-textbox')[0]

toggleButton.addEventListener('click', () => { //Event listener for hamburger menu
    navbarLinks.classList.toggle('active');
    navFull.classList.toggle('active');
    navBar.classList.toggle('active');
    headerText.classList.toggle('active')
});

const newHeaderLoc = document.createElement("h3"); // insert h3 element into location map
newHeaderLoc.classList.add("header-loc");
const contentSa = `Sarajevo`; //Insesrted content
newHeaderLoc.append(contentSa);
const newHeaderLocTwo = document.createElement("h3"); // insert h3 emenet into map
newHeaderLocTwo.classList.add("header-locTwo");
const contentLju = `Ljubuški`; //Inserted content
newHeaderLocTwo.append(contentLju);


const sarajevo = document.querySelector(".sarajevo");
const ljubuski = document.querySelector(".ljubuski");
sarajevo.prepend(newHeaderLoc);
ljubuski.prepend(newHeaderLocTwo);