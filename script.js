let textarea = document.getElementById('text');
let word_count = document.querySelector('.word_count');
let max_word_count = 250;

word_count.innerHTML = textarea.value.length + "/" + max_word_count;

function UpdateUI() {
    let len = textarea.value.length;
    word_count.innerHTML = len + "/" + max_word_count;

    // Handling edge case where the user pastes a string longer than max_word_count
    if(len > max_word_count){
        textarea.value = textarea.value.slice(0, max_word_count);
        len = max_word_count;
    }

    if (len < 150) {
        setStyle("green")
    } else if (len >= 150 && len < 250) {
        setStyle("orange")
    } else {
        setStyle("red")
    }
}

function setStyle(color) {
    textarea.style.border = `2px solid ${color}`;
    textarea.style.color = `${color}`;
    word_count.style.color = `${color}`;
}

textarea.addEventListener('input', UpdateUI)