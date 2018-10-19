var timeline = new TimelineMax();

if(window.innerHeight <  window.innerWidth){
    timeline.from(".home-text", .7, {opacity: 0, x: "-200px", ease: Power2.easeOut});
    timeline.from(".banner-image", .5, {opacity: 0, ease: Power2.easeIn})
    timeline.from(".btn-red", .2, {opacity: 0, ease: Power2.easeIn});
    timeline.from(".btn-black", .2, {opacity: 0, ease: Power2.easeIn});
    timeline.from("nav", .7 , {opacity: 0, ease: Power2.easeInOut});
} else {
    timeline.from(".banner-image", .5, {opacity: 0, ease: Power2.easeIn})
    timeline.from("nav", .7 , {opacity: 0, ease: Power2.easeInOut});
    timeline.from(".home-text", .7, {opacity: 0, y: "-100px", ease: Power2.easeOut});
    timeline.from(".btn-red", .2, {opacity: 0, ease: Power2.easeIn});
    timeline.from(".btn-black", .2, {opacity: 0, ease: Power2.easeIn});
}