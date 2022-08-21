function search() {
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let userWord = document.getElementById('searchText').value;
   let counter = 0;
   let match = document.getElementById('result');

   

   for (const town of townsElements) {
      if(town.textContent.includes(userWord)){
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
      match.textContent = `${counter} matches found`;
}
