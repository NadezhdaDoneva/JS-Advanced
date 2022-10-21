function solve(){
   let archived = [];
   let authorInputEl = document.getElementById('creator');
   let titleInputEl = document.getElementById('title');
   let categoryInputEl = document.getElementById('category');
   let contentInputEl = document.getElementById('content');
   let sectionContentEl = document.getElementsByTagName('section')[1];
   let olArchivedEl = document.getElementsByTagName('ol')[0];
   let archiveSection = document.getElementsByClassName('archive-section')[0];

   let createButtonEl = document
   .getElementsByClassName('btn create')[0]
   .addEventListener('click', (ev)=>{
      postContent(
         ev,
         authorInputEl.value,
         titleInputEl.value,
         categoryInputEl.value,
         contentInputEl.value
      );
   });

   function postContent(
      ev,
      authorInputEl,
      titleInputEl,
      categoryInputEl,
      contentInputEl
   ) {
      ev.preventDefault();
      let article = elGenerator('article');
      elGenerator('h1', `${titleInputEl}`, article);
      let category = elGenerator('p', `Category:`);
      elGenerator('strong', `${categoryInputEl}`, category);
      article.appendChild(category);
      let creator = elGenerator('p', `Creator:`);
      elGenerator('strong', `${authorInputEl}`, creator);
      article.appendChild(creator);
      elGenerator('p', `${contentInputEl}`, article);

      let divButtons = elGenerator('div');
      divButtons.setAttribute('class', 'buttons');
      let deleteButton = elGenerator('button', `Delete`, divButtons);
      deleteButton.setAttribute('class', 'btn delete');
      let archiveButton = elGenerator('button', 'Archive', divButtons);
      archiveButton.setAttribute('class', 'btn archive');

      deleteButton.addEventListener('click', (ev)=>{
         deleteContent(ev);
      });

      archiveButton.addEventListener('click', (ev)=>{
         archiveContent(
            ev,
            titleInputEl
         );
         deleteContent(ev);
      })

      article.appendChild(divButtons);
      sectionContentEl.appendChild(article);
   }

   function deleteContent(ev) {
      ev.target.parentNode.parentNode.remove();
   }

   function archiveContent(
      ev,
      _titleInputEl
   ) {
      ev.preventDefault();
      archived.push(_titleInputEl);
      console.log(archived);
      let archivedSorted = archived.sort();

      let allLiElements = Array.from(document.getElementsByTagName('li'));
      for (const el of allLiElements) {
         el.remove();
      }

      for (const title of archivedSorted) {
         elGenerator('li', `${title}`, olArchivedEl);
      }
   }

   function elGenerator(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;
  
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
  }

