let textarea = document.getElementById('text');
let word_count = document.querySelector('.word_count');
let max_word_count = 250;

word_count.innerHTML = textarea.value.length + "/" + max_word_count;

textarea.addEventListener('input', function () {

    word_count.innerHTML = textarea.value.length + "/" + max_word_count;

    if (textarea.value.length < 150) {
        textarea.style.border = "2px solid green";
        textarea.style.color = "green";
        word_count.style.color = "green";
    } else if (textarea.value.length >= 150 && textarea.value.length < 250) {
        textarea.style.border = "2px solid orange";
        textarea.style.color = "orange";
        word_count.style.color = "orange";
    } else {
        textarea.value = textarea.value.slice(0, max_word_count - 1);
        textarea.style.border = "2px solid red";
        textarea.style.color = "red";
        word_count.style.color = "red";
    }
})