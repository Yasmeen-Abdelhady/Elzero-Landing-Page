let menu = document.querySelector("header .other .menu");
document.querySelector("header .other").onclick = function() {
    if(!menu.classList.contains("active")){
        menu.classList.add('active')
    }
    else{
        menu.classList.remove('active')
    }
}

let upToTop = document.querySelector(".up-to-top");

window.onscroll = function(){
    if(window.scrollY>200){
        upToTop.classList.add("active")
    }
    else{
        upToTop.classList.remove("active")
    }
}

upToTop.onclick =function() {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}

let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

window.onload = function(){
    if(localStorage.getItem('pageMode')){
        if(localStorage.getItem('pageMode')=='dark'){
            moon.click();
        }
        else{
            sun.click();
        }
    }
}

moon.onclick = function(){
    changeMode('#131313','#191919','#191919','#121212','#fff','#101010','#202020','#000','#fff','dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    moon.classList.remove("active");
    sun.classList.add("active");
}

sun.onclick = function() {
    changeMode('#fff','#ececec','#fafafa','#e4e4e4','black','#f3f3f3','#f6f5f5','#ccc','black','light');
    sun.classList.remove("active");
    moon.classList.add("active");
}

function changeMode (a,b,c,d,e,f,g,h,i,j){
    document.documentElement.style.setProperty('--body-color', a);
    document.documentElement.style.setProperty('--section-background', b);
    document.documentElement.style.setProperty('--hover-background', c);
    document.documentElement.style.setProperty('--hover-2-color', d);
    document.documentElement.style.setProperty('--black', e);
    document.documentElement.style.setProperty('--white-3', f);
    document.documentElement.style.setProperty('--white-4', g);
    document.documentElement.style.setProperty('--shadow-color', h);
    document.body.style.color = i

    window.localStorage.setItem("pageMode" , j)
}