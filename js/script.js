const btnEncrypt = document.querySelector('.button-encrypt');
const btnDecrypt = document.querySelector('.button-decrypt');
const typeAText = document.querySelector('.type-a-text');
const textOutput = document.querySelector('.text-output');
const decryptedText = document.querySelector('.decrypted-text');



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
    encrypt(input);
    typeAText.style.display = 'none';
    textOutput.style.display = 'flex';
    decryptedText.innerHTML = `${encrypt(input)}`;

});

btnDecrypt.addEventListener("click", ()=>{
    const input = document.querySelector('textarea').value;
    decrypt(input);
    typeAText.style.display = 'none';
    textOutput.style.display = 'flex';
    decryptedText.innerHTML = `${decrypt(input)}`;

});

console.log(encrypt(input));
console.log(encrypt('gato'))
console.log(decrypt('gaitober'))