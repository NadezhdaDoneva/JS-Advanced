function create(words) {
   let biggestDivElement = document.getElementById('content');
   for (const w of words) {
      let pElemnt = document.createElement('p');
      pElemnt.textContent = w;
      pElemnt.style.display = 'none';
      let divElement = document.createElement('div');
      divElement.appendChild(pElemnt);
      biggestDivElement.appendChild(divElement);
      divElement.addEventListener('click', (e) =>{
         e.target.children[0].style.display='block';
      })
   }
}