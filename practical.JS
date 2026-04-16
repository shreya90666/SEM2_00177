function checkChar() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch === "") {
        result.innerHTML = "Please enter a character!";
    } 
    else if (!isNaN(ch)) {
        result.innerHTML = "Please enter an alphabet!";
    }
    else if (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
    ) {
        result.innerHTML = "It is a Vowel";
    } 
    else {
        result.innerHTML = "It is a Consonant";
    }
}