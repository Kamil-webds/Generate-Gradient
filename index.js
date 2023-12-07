let colorOne = document.getElementById("color-a");
    colorTwo = document.getElementById("color-b");
    currentDirection = 'to bottom';
    outputCode = document.getElementById("code");
    copyButton = document.getElementById("copy");

function setDirection(value, _this){
    let directions = document.querySelectorAll(".buttons button");
    for(let i of directions){
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, 
     ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.
    backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, 
    ${colorTwo.value})`;
}

function copyText() {
    // outputCode.select();
    // document.execCommand('copy');
    // alert("Gradient Copied!")
    navigator.clipboard.writeText(outputCode.value);
    copyButton.innerText = "Check";
    copyButton.computedStyleMap.color = "#1ccc0f";
    setTimeout(() =>{
        copyButton.innerText = "✔";
        copyButton.style.color = "#878b9b";
    }, 1500)
}

generateCode();

copyButton.addEventListener("click", copyText)