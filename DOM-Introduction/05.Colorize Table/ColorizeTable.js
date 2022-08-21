function colorize() {
    //first solution with CSS selector
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    //let rows = Array.from(rowElements)
    // rows.forEach(x => {
    //     x.style.backgroundColor = 'teal'
    // });
    

    //second way to solve the problem:
    let rowElements = document.getElementsByTagName('tr')

    let rows = Array.from(rowElements)

    rows.forEach((x,i)=>{
        if(i%2!=0){
            x.style.backgroundColor='teal'
        }
    })
}