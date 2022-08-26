function generateReport() {
    let values = [];
    let objArr = [];
    let checkedBoxesElements = document.querySelectorAll('input:checked');
    let checkedBoxesArr = Array.from(checkedBoxesElements);
    let trElementsArr = Array.from(document.querySelectorAll('tbody tr'));
    console.log(trElementsArr[0].textContent);
    for (const box of checkedBoxesElements) {
        values.push(box.name)
    }
    

    for (let i = 0; i < values.length; i++) {
        let currentName = values[i];
        let currObj = {}
        if (currentName=='employee') {
            for (let j = 0; j < trElementsArr.length; j++) {
                currObj[employee] = trElementsArr[j][0]
                
            }
        } else if(currentName=='deparment'){

        } else if(currentName=='status'){
            
        } else if(currentName=='dateHired'){
            
        } else if(currentName=='benefits'){
            
        } else if(currentName=='salary'){
            
        } else if(currentName=='rating'){
            
        }
        
    }
}