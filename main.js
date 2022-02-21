/* Variables */
let body = document.body
let theme = ''
//Switches
let leftSwitch = document.getElementById('switchLeft')
let rightSwitch = document.getElementById('switchRight')
//Nav + Logos
let snowboardNav = document.getElementById('snowboardNav')
let skateboardNav = document.getElementById('skateboardNav')
let snowboardLogo = document.getElementById('snowboardLogo')
let skateboardLogo = document.getElementById('skateboardLogo')
//Sections\\
//Hero
let heroSnow = document.getElementById('heroSnow')
let heroSkate = document.getElementById('heroSkate')
//Videos
let videoSnow = document.getElementById('videoSnow')
let videoSkate = document.getElementById('videoSkate')
//Modal
let modalSnowOpener = document.getElementById('playSnow')
let modalSnowCloser = document.getElementById('closeSnow')

let modalSkateOpener = document.getElementById('playSkate')
let modalSkateCloser = document.getElementById('closeSkate')

let modalSnow = document.getElementById('videoModalSnow')
let modalSkate = document.getElementById('videoModalSkate');

let snowVideo = document.getElementById('snowModalVideo')
let skateVideo = document.getElementById('skateModalVideo')

let snowModalInner = document.getElementById('snowModalInner')
let skateModalInner = document.getElementById('skateModalInner')
//Blocks
let blocksSnow = document.getElementById('blocksSnow')
let blocksSkate = document.getElementById('blocksSkate')
//Posts
let postsSnow = document.getElementById('postsSnow')
let postsSkate = document.getElementById('postsSkate')
//Buttons/Blocks\\
let buttons = document.getElementsByClassName('button')
let blocks = document.getElementsByClassName('block')
// Footer
let footer = document.getElementById('footer')

/* Cookies */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie() {
    let theme = getCookie("theme");
    if (theme == "Snow") {
        switchSwitchesR();
    } else {
        switchSwitchesL();
    }
  }


/* Event Listeners */
leftSwitch.addEventListener("click", switchSwitchesL)
rightSwitch.addEventListener("click", switchSwitchesR)

modalSnowOpener.addEventListener("click", modalOpenSnow)
modalSnowCloser.addEventListener("click", modalCloser)
modalSkateOpener.addEventListener("click", modalOpenSkate)
modalSkateCloser.addEventListener("click", modalCloser)

modalSnow.addEventListener('click', function(event) {
    let isClickInsideElement = snowModalInner.contains(event.target);
    if (isClickInsideElement) {
        modalCloser()
    }
});

modalSkate.addEventListener('click', function(event) {
    let isClickInsideElement = skateModalInner.contains(event.target);
    if (isClickInsideElement) {
        modalCloser()
    }
});

/* Functions */
function switchSwitchesL() {
    document.cookie = 'theme=Skate'
    //Buttons/Blocks
    for (i=0; i< buttons.length; i++) {
        buttons[i].style.backgroundColor = 'var(--skateDark)';
    }
    for (i=0; i< blocks.length; i++) {
        blocks[i].style.backgroundColor = 'var(--skateDark)';
        blocks[i].style.color = 'var(--skateLight)';
    }
    //Body
    document.body.classList.replace('snowBg', 'skateBg');
    //Header
    snowboardNav.classList.add('hide');
    skateboardNav.classList.remove('hide');
    snowboardLogo.classList.add('hide');
    skateboardLogo.classList.remove('hide');
    //Sections
    heroSnow.classList.add('hide');
    heroSkate.classList.remove('hide');
    videoSnow.classList.add('hide');
    videoSkate.classList.remove('hide');
    blocksSnow.classList.add('hide');
    blocksSkate.classList.remove('hide');
    postsSnow.classList.add('hide');
    postsSkate.classList.remove('hide');
    //Footer
    footer.classList.replace('snowColor', 'skateColor')
}

function switchSwitchesR() {
    document.cookie = 'theme=Snow'
    //Buttons
    for (i=0; i< buttons.length; i++) {
        buttons[i].style.backgroundColor = 'var(--snowDark)';
    }
    for (i=0; i< blocks.length; i++) {
        blocks[i].style.backgroundColor = 'var(--snowDark)';
        blocks[i].style.color = 'var(--snowLight)';
    }    
    //Bg
    document.body.classList.replace('skateBg', 'snowBg');
    //Header
    skateboardNav.classList.add('hide');
    snowboardNav.classList.remove('hide');
    skateboardLogo.classList.add('hide');  
    snowboardLogo.classList.remove('hide');
    //Sections
    heroSnow.classList.remove('hide');
    heroSkate.classList.add('hide');
    videoSnow.classList.remove('hide');
    videoSkate.classList.add('hide');
    blocksSnow.classList.remove('hide');
    blocksSkate.classList.add('hide');
    postsSnow.classList.remove('hide');
    postsSkate.classList.add('hide');
    //Footer
    footer.classList.replace('skateColor', 'snowColor')
    
}

function modalOpenSnow() {
    modalSnow.classList.remove('hide');
    snowVideo.src = 'https://www.youtube.com/embed/t705_V-RDcQ?start=15&mute=1'
}

function modalOpenSkate() {
    modalSkate.classList.remove('hide');
    skateVideo.src = 'https://www.youtube.com/embed/dA4BJtPeXL8?start=40&mute=1'
}

function modalCloser() {
    modalSnow.classList.add('hide');
    modalSkate.classList.add('hide');
    //Reset Video
    snowVideo.src = ''
    skateVideo.src = ''
}

//Remove .html 
function processAjaxData(response, urlPath){
    document.getElementById("content").innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
}

window.onpopstate = function(e){
    if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};

checkCookie()