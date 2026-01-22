const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", (event) => {
    const maxLength = 50 
    const currentLength = event.target.value.length;
    charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;
    if (currentLength >= maxLength) {
        event.target.value = event.target.value.substring(0, maxLength);
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
})