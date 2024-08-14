const text = "Hello, My name is Vinayak!\nA programmer.";
const typingSpeed = 100; // Speed for typing
const deletingSpeed = 50; // Speed for deleting
const delayBetweenCycles = 1000; // Delay before retyping starts
const typingText = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function type() {
    if (!isDeleting) {
        if (index < text.length) {
            if (text[index] === "\n") {
                typingText.innerHTML += "<br>";
            } else {
                typingText.innerHTML += text[index];
            }
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, deletingSpeed);
            }, delayBetweenCycles);
        }
    } else {
        if (index > 0) {
            if (text[index - 1] === "\n") {
                typingText.innerHTML = typingText.innerHTML.slice(0, -4); // Remove <br>
            } else {
                typingText.innerHTML = typingText.innerHTML.slice(0, -1);
            }
            index--;
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = false;
            setTimeout(type, typingSpeed);
        }
    }
}

type();
