const textarea = document.querySelector('#area-text');
const cryptoButton = document.querySelector('#encrypt-button');
const decryptoButton = document.querySelector('#decrypt-button');
const outputArea = document.querySelector('#section-output');
let textContent = document.querySelector("textarea[name='text_input']")

cryptoButton.addEventListener("click", () => {
    displayOutputContent("crypt");
})
decryptoButton.addEventListener("click", () => {
    displayOutputContent("decrypt");
})

function handleEncryption(text) {
    let encryptedText = text
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    return encryptedText;
  }
  
function handleDecryption(text) {
    let decryptedText = text
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    return decryptedText;
}

function displayOutputContent(action) {
    let text = textContent.value;
    if (text == "") return;
  
    const outputContent = document.createElement("textarea");
    outputContent.className = "textarea__input output";
    outputContent.disabled = true;
  
    const copyButton = document.createElement("button");
    copyButton.className = "btn__cript btn-copy";
    copyButton.id = "copy-button";
    copyButton.type = "button";
    copyButton.innerText = "Copiar";
  
    if (action == "crypt") {
      outputContent.value = handleEncryption(text);
    } else if (action == "decrypt") {
      outputContent.value = handleDecryption(text);
    }
  
    copyButton.onclick = () => navigator.clipboard.writeText(outputContent.value);
  
    outputArea.innerHTML = "";
    outputArea.append(outputContent, copyButton);
}