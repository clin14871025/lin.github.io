let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/derp.jpg'){
        myImage.setAttribute ('src','image/toothdoctor.jpg');
    } else {
        myImage.setAttribute('src','image/toothdoctor.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Dentistry is cool,'+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dentisrty is cool,'+ storedName;
}
function setUserName(){
    let myName = prompt('please enter your name');
    if(!myName || myName ===null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Dentistry is cool,' + myName;
    }
}

myButton.onclick = function(){
    setUserName();
}