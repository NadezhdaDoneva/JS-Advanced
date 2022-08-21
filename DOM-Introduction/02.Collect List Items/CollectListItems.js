function extractText() {
    let ulElement = document.getElementById('items')
    let textAreaElement = document.getElementById('result')
    textAreaElement.textContent = ulElement.textContent
}