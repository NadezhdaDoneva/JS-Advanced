function solve() {
  let inputTaskElement = document.getElementById("task");
  let descriptionElement = document.getElementById("description");
  let dueDateElement = document.getElementById("date");
  let addButtonElement = document.getElementById("add");
  addButtonElement.type = "button";
  console.log(addButtonElement);
  let orangeSectionElement = document.getElementsByTagName("section")[1];
  let yellowSectionElement = document.getElementsByTagName('section')[2];
  let greenSection = document.getElementsByTagName('section')[3];

  addButtonElement.addEventListener("click", () => {
    if (
      inputTaskElement.length != 0 &&
      descriptionElement != 0 &&
      dueDateElement != 0
    ) {
      let newArticleOpen = document.createElement("article");

      let newArticlceHeaderElement = document.createElement("h3");
      newArticlceHeaderElement.textContent = inputTaskElement.value;

      let newArticleDescriptionParagraph = document.createElement("p");
      newArticleDescriptionParagraph.textContent = descriptionElement.value;

      let newArticleDueDateParagraph = document.createElement("p");
      newArticleDueDateParagraph.textContent = dueDateElement.value;

      let divElementButtons = document.createElement("div");
      divElementButtons.classList.add("flex");

      let firstButtonElement = document.createElement("button");
      let secondButtonElement = document.createElement("button");
      firstButtonElement.classList.add("green");
      secondButtonElement.classList.add("red");
      firstButtonElement.textContent = "Start";
      secondButtonElement.textContent = "Delete";
      divElementButtons.appendChild(firstButtonElement);
      divElementButtons.appendChild(secondButtonElement);

      newArticleOpen.appendChild(newArticlceHeaderElement);
      newArticleOpen.appendChild(newArticleDescriptionParagraph);
      newArticleOpen.appendChild(newArticleDueDateParagraph);
      newArticleOpen.appendChild(divElementButtons);
      orangeSectionElement.appendChild(newArticleOpen);

      firstButtonElement.addEventListener('click', (e)=>{
        let parent = e.currentTarget.parentElement.parentElement;
        parent.remove();
        yellowSectionElement.appendChild(parent);

        firstButtonElement.classList.remove('green');
        firstButtonElement.classList.add('red');
        firstButtonElement.textContent = 'Delete';
        secondButtonElement.classList.add('orange');
        secondButtonElement.classList.remove('red');
        secondButtonElement.textContent = 'Finish';
        

        let deleteButtonElements = Array.from(document.getElementsByClassName('red'));
      deleteButtonElements.forEach(element => {
        element.addEventListener('click', (e)=>{
            e.currentTarget.parentElement.parentElement.remove();
          })

          let finishButtonElements = Array.from(document.getElementsByClassName('orange'));
          finishButtonElements.forEach(element => {
            element.addEventListener('click', (e)=>{
                let parentInProgress = e.currentTarget.parentElement.parentElement;
                parentInProgress.remove();
                greenSection.appendChild(parentInProgress);
                let buttonsComplete = greenSection.querySelectorAll('button');
                buttonsComplete.forEach(element => {
                    element.remove();
                });
              })
          });
      });
      })

      let deleteButtonElements = Array.from(document.getElementsByClassName('red'));
      deleteButtonElements.forEach(element => {
        element.addEventListener('click', (e)=>{
            e.currentTarget.parentElement.parentElement.remove();
          })
      });
    }
  });
}
solve();
