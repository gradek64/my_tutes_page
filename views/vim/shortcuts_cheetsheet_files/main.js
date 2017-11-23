  
var el = {}; //elements object

if (Enabler.isInitialized()) {
  init();
} else {
  Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}

// Runs when Enabler is ready.
function init() {
  console.log("Enabler: isInitialized");
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
  }
};

// Runs when the page is completely loaded.   
function politeInit() {
  console.log("Enabler: Page is Loaded");
  if(Enabler.isVisible()) {
    startAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
  } 
};

function startAd() {

    el.ad_container = document.getElementById('ad-container');
    el.clickthrough_button = document.getElementById('clickthrough-button');
    
    //Bring in listeners
    addListeners();
   

    frame1_animation();

    //Show Ad
    el.ad_container.style.display = "block";
}

//Add Event Listeners
function addListeners() {
    el.clickthrough_button.addEventListener('click', clickthrough_buttonClick);
}

function frame1_animation() {

    var tl = new TimelineLite();
    
     TweenLite.set("#img2",{alpha:0, scale:1})
     TweenLite.set("#img3",{alpha:0, scale:1})
     TweenLite.set("#img4",{alpha:0, scale:1})
     TweenLite.set("#img1",{alpha:1, scale:1})
     TweenLite.set(cta,{y:0,alpha:1})
     TweenLite.set(cta_over,{y:0,alpha:1})

     TweenLite.to(img1, 4, {ease: Power1.easeIn, scaleX: 0.87,scaleY: 0.92});
   
     TweenLite.to(img2, 1, {delay:3.5,ease: Power1.easeInOut, alpha:1});
     TweenLite.to(img2, 4, {delay:3.5,ease: Power1.easeIn, scaleX: 0.87,scaleY: 0.92});

     TweenLite.to(img3, 1, {delay:7.0,ease: Power1.easeInOut, alpha:1});
     TweenLite.to(img3, 4, {delay:7.0,ease: Power1.easeIn, scaleX: 0.87,scaleY: 0.92});

     TweenLite.to(img4, 1, {delay:10.5,ease: Power1.easeInOut, alpha:1});
     TweenLite.to(img4, 4, {delay:10.5,ease: Power1.easeIn, scaleX: 0.87,scaleY: 0.92});
     TweenLite.to(img4, 4, {delay:13.5,onComplete:frame1_animation});

}

TweenMax.delayedCall(15, endAnim); 

function endAnim() { 
    TweenMax.killAll();
}


function clickthrough_buttonClick() {
Enabler.exit('clickthrough-button');
console.log("Exit");
TweenMax.killAll(true, true, true, true);
}
  





    


