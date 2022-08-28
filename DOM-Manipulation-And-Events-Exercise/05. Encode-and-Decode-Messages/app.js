function encodeAndDecodeMessages() {
    let textAreasElements = document.getElementsByTagName('textarea');
    let firstTextElement = textAreasElements[0];
    let secondTextElement = textAreasElements[1];
    let buttonElements = document.getElementsByTagName('button');
    let firstButton = buttonElements[0];
    let secondButton = buttonElements[1];

    firstButton.addEventListener('click', onFirstButtonClick);
    secondButton.addEventListener('click', onSecondButtonClick);

    function onFirstButtonClick(e){
        let text = firstTextElement.value;
        let res='';
        for (let i = 0; i < text.length; i++) {
            let newLetterCharCode = text.charCodeAt(i);
            let newLetter = String.fromCharCode(newLetterCharCode+1);
            res+=newLetter;
        }
        secondTextElement.value=res;
        firstTextElement.value = '';
    }

    function onSecondButtonClick(e){
        let text = secondTextElement.value;
        let res='';
        for (let i = 0; i < text.length; i++) {
            let newLetterCharCode = text.charCodeAt(i);
            let newLetter = String.fromCharCode(newLetterCharCode+1);
            res+=newLetter;
        }
        firstTextElement.value=res;
        secondTextElement.value = '';
    }
}