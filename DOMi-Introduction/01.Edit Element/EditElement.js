function editElement(element,match,replacer) {
        while(element.textContent.includes(match)){
        element.textContent = element.textContent.replace(match,replacer)
        }
    
        //regexp solution
        let pattern = new RegExp(match,'g')
        element.textContent = element.textContent.replace(match,replacer)
}