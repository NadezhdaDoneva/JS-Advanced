window.addEventListener("load", solve);

function solve() {
  let titleInputEl = document.getElementById("post-title");
  let categoryInputEl = document.getElementById("post-category");
  let contentInputEl = document.getElementById("post-content");
  let reviewUlEl = document.getElementById("review-list");
  let publishedUlEl = document.getElementById("published-list");
  let clearButtonEl = document.getElementById("clear-btn");

  let publishButtonEl = document
  .getElementById("publish-btn")
  .addEventListener("click", (ev)=>{
    ev.preventDefault();
    if(titleInputEl.value!=="" &&
    categoryInputEl.value!=="" &&
    contentInputEl.value!==""){
      addReview(
        ev,
        titleInputEl.value,
        categoryInputEl.value,
        contentInputEl.value
      );
      clearInputFields();
    }
  });

  function addReview(
    ev,
    titleInputEl,
    categoryInputEl,
    contentInputEl
  ) {
    let li = elGenerator("li");
    let article = elGenerator("article");
    li.setAttribute("class", "rpost");
    elGenerator("h4", `${titleInputEl}`, article);
    elGenerator("p", `Category: ${categoryInputEl}`, article);
    elGenerator("p", `Content: ${contentInputEl}`, article);
    let editButtonEl = elGenerator("button", "Edit", li);
    let approveButtonEl = elGenerator("button", "Approve", li);
    editButtonEl.setAttribute("class", "action-btn edit");
    approveButtonEl.setAttribute("class", "action-btn approve");

    li.appendChild(article);
    reviewUlEl.appendChild(li);

    editButtonEl.addEventListener("click", (ev)=>{
      edit(
        ev,
        titleInputEl,
        categoryInputEl,
        contentInputEl)
    });

    approveButtonEl.addEventListener("click", (ev)=>{
      approve(
        ev,
        titleInputEl,
        categoryInputEl,
        contentInputEl
      )
    })
  }

  function edit(
    ev,
    _titleInputEl,
    _categoryInputEl,
    _contentInputEl
  ) {
    ev.target.parentNode.remove();

    titleInputEl.value = _titleInputEl;
    categoryInputEl.value = _categoryInputEl;
    contentInputEl.value = _contentInputEl;
  }

  function approve(
    ev,
    titleInputEl,
    categoryInputEl,
    contentInputEl
    ) {
      let li = elGenerator("li");
      let article = elGenerator("article");
    li.setAttribute("class", "rpost");
    elGenerator("h4", `${titleInputEl}`, article);
    elGenerator("p", `Category: ${categoryInputEl}`, article);
    elGenerator("p", `Content: ${contentInputEl}`, article);
    li.appendChild(article);
    publishedUlEl.appendChild(li);
    }

    clearButtonEl.addEventListener("click", (ev)=>{
      publishedUlEl.remove();
    })


  function clearInputFields() {
    titleInputEl.value="";
    categoryInputEl.value="";
    contentInputEl.value="";
  }

  function elGenerator(type, content, parent){
    let element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
