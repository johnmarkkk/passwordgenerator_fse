const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
    '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^',
    '_', '`', '{', '|', '}', '~'
];

let passwordLenght = 12;
let generatePassword = "";
let history = [];

const button = document.querySelector("button");
const input = document.querySelector("input");
const paragraph = document.querySelector(".password");
const content = document.querySelector(".history .content");
const i = document.querySelector("i");
const clear = document.querySelector(".history .clear");

// to clear history
clear.addEventListener('click', () => {
    const paragraphAll = content.querySelectorAll("p");
    for(let i = 0; i < paragraphAll.length; i++){
        paragraphAll[i].remove();
    }
    history = [];
    input.value = "";
});

// for password generated history
paragraph.addEventListener('click', () => {
    if(history.length !== 0){
        paragraph.innerHTML = "";
        content.style.display = 'block';
        history.forEach( i => {
            if(!content.innerText.includes(i) ){
                let p = document.createElement("p");
                p.innerText = i;
                content.append(p);
            }
        })
    }
    i.addEventListener('click', () => {
        paragraph.innerHTML = "password generated history";
        content.style.display = 'none';
    } )

})


button.addEventListener('click', generate);

// use to generate random passwords with 12 characters only
function generate(){
    generatePassword = "";
    for(let i = 0; i<passwordLenght; i++){
        generatePassword = generatePassword + characters[Math.floor(Math.random()*characters.length)];
    };
    input.value = generatePassword;
    history.push(generatePassword);

    history.forEach( i => {
        if(!content.innerText.includes(i) ){
            let p = document.createElement("p");
            p.innerText = i;
            content.append(p);
        }
    })
}







