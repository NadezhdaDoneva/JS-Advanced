function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let userInput = document.getElementById('searchField');
      

      for (const element of tableElements) {
         element.classList.remove('select');
         if(element.textContent.includes(userInput.value)){
            element.className = 'select';
         }
      }
      userInput.value = '';
   }
}