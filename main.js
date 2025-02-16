const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    navBgOverlayEl.style.display = "block";
    
    document.body.style.visibility = "visible";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
    document.body.style.overflow = "hidden";
}

const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    
    setTimeout(() => {
        navBgOverlayEl.style.display = "none";
    }, 300);

    document.body.style.visibility = "visible";
    document.body.style.height = "initial";
    document.body.style.width = "100%";
    document.body.style.overflowX = "hidden";
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);
