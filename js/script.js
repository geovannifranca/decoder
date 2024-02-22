const btnEncrypt = document.querySelector('.button-encrypt');
const btnDecrypt = document.querySelector('.button-decrypt');
const buttonCopy = document.querySelector('.button-copy');
const typeAText = document.querySelector('.type-a-text');
const textOutput = document.querySelector('.text-output');
const decryptedText = document.querySelector('.decrypted-text');
const message = document.querySelector('.message');


function encrypt(text) {
    const mapEncrypt = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    return text.split('').map(char => {
        const crypto = mapEncrypt.find(([letter]) => letter === char);
        return crypto ? crypto[1] : char;
    }).join('');
}

function decrypt(text) {
    const mapDecrypt = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    return text.replace(/(enter|imes|ai|ober|ufat)/g, match => {
        const description = mapDecrypt.find(([crypto]) => crypto === match);
        return description ? description[1] : match;
    });
}

btnEncrypt.addEventListener("click", ()=>{
    const input = document.querySelector('textarea').value;
    if(input !== ''){
    encrypt(input);
    typeAText.style.display = 'none';
    textOutput.style.display = 'flex';
    decryptedText.innerHTML = `${encrypt(input)}`;
    }

});

btnDecrypt.addEventListener("click", ()=>{
    const input = document.querySelector('textarea').value;
    if(input !== ''){
        decrypt(input);
    typeAText.style.display = 'none';
    textOutput.style.display = 'flex';
    decryptedText.innerHTML = `${decrypt(input)}`;
    }

});

buttonCopy.addEventListener("click", () => {
    const textToCopy = decryptedText.innerText;
    navigator.clipboard.writeText(textToCopy);
    message.style.display = 'block';
    setInterval(function(){
        message.style.display = 'none'; 
      }, 2000);
   
});

