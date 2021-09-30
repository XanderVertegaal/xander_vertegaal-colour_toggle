// Ik had alle elementen ook gewoon een ID kunnen geven en documentQuerySelector kunnen gebruiken, maar ik wilde de andere selectiemogelijkheden ook graag proberen.
const menuList = document.querySelector('nav');
const menuListItems = document.querySelectorAll('ul li');
const subTitle = document.getElementsByTagName('h2')[0];
const hamburger = document.getElementsByClassName('icon-wrapper')[0];
const colorDict = {
    'Digit1': 'white',
    'Digit2': 'red',
    'Digit3': 'blue',
    'Digit4': 'green',
    'Digit5': 'cyan',
    'Digit6': 'magenta',
    'Digit7': 'yellow'
}

const colorChange = function (color) {
    // .classList.toggle werkt hier niet zo goed omdat het geen simpele aan/uit-functie is. Je gaat al gauw klasses stapelen, en dat is niet wat je wilt.
    document.body.className = color + "-background";
    subTitle.innerHTML = "The currently selected colour is: " + color;
    document.querySelector('#' + color).checked = true;
}

const clickEvent = function (event) {
    colorChange(event.currentTarget.className);
}

const keyEvent = function (event) {
    if (event.code in colorDict) {
        colorChange(colorDict[event.code]);
    }
}

const toggleMenu = function () {
    menuList.classList.toggle('unfolded');
}

const toggleRadio = function (event) {
    let radioBtn = document.querySelector('#btn-' + event.currentTarget.className);
    radioBtn.checked = true;
}

for (i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener('click', clickEvent);
    menuListItems[i].addEventListener('click', toggleMenu);
    menuListItems[i].addEventListener('click', toggleRadio);
}

document.body.addEventListener('keydown', keyEvent);

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('mouseover', function () {
    menuList.classList = 'nav-bar unfolded';
});
hamburger.addEventListener('mouseleave', function () {
    menuList.classList = 'nav-bar';
});
menuList.addEventListener('mouseover', function () {
    menuList.classList = 'nav-bar unfolded';
});
menuList.addEventListener('mouseleave', function () {
    menuList.classList = 'nav-bar';
});

// Ik ben niet helemaal blij met de harde definities van classList zoals hierboven. Als het goed is, werkt het op deze manier, maar ik hoor graag hoe het nog droger en efficiënter kan :)