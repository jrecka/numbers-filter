function filteredText() {
    const inputText = document.getElementById('textBox').value;
    const result = inputText.match(/\d/);
    alert(result);
}