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

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener('click', generate);

function generate(){
    generatePassword = "";
    for(let i = 0; i<passwordLenght; i++){
        generatePassword = generatePassword + characters[Math.floor(Math.random()*characters.length)];
    };
    
    input.value = generatePassword;
}





