function solve() {
    let nameInputEl = document.getElementById("recipientName");
    let titleInputEl = document.getElementById("title");
    let messageInputEl = document.getElementById("message");
    let addButtonEl = document.getElementById("add");
    let resetButtonEl = document.getElementById("reset");
    let postedUlEl = document.getElementById("list");
    let sentUlEl = document.getElementById("sent-list");
    let trashUlEl = document.getElementById("delete-list");

    addButtonEl.addEventListener("clcik", (ev)=>{
        ev.preventDefault();
        if(nameInputEl.value!=="" &&
        titleInputEl.value!=="" &&
        messageInputEl.value!==""){
            addPost(
                ev,
                nameInputEl.value,
                titleInputEl.value,
                messageInputEl.value
            );
            clearInputFields();
        }
    })

    function addPost(
        ev,
        nameInputEl,
        titleInputEl,
        messageInputEl
    ){
        let li = document.createElement("li");
        elGenerator("h4", `Title: ${nameInputEl}`, li);
        elGenerator("h4", `Recipient Name: ${titleInputEl}`, li);
        elGenerator("span", `${messageInputEl}`, li);
        let divEl = document.createElement("div");
        divEl.setAttribute("id", "list-action");
        let sendButton = elGenerator("button", "Send", divEl);
        let deleteButton = elGenerator("button", "Delete", divEl);
        sendButton.setAttribute("id", "send");
        deleteButton.setAttribute("id", "delete");
        li.appendChild(divEl);
        postedUlEl.appendChild(li);

        sendButton.addEventListener("click", (ev)=>{
            sentMailsFunc(
                ev,
                nameInputEl,
                titleInputEl,
                messageInputEl
            )
        })

        deleteButton.addEventListener("click", (ev)=>{
            deleteMails(ev,
                nameInputEl,
                messageInputEl)
        })
    }

    function sentMailsFunc(
        ev,
        nameInputEl,
        titleInputEl,
    ) {
        ev.target.parentNode.parentNode.remove();
        let li = document.createElement("li");
        elGenerator("span", `To: ${nameInputEl}`, li);
        elGenerator("span", `Title: ${titleInputEl}`, li);
        let divEl = document.createElement("div");
        let deleteButton2 = elGenerator("button", "Delete", divEl);
        deleteButton2.setAttribute("class", "btn");
        li.appendChild(divEl);
        sentUlEl.appendChild(li);

        deleteButton2.addEventListener("click", (ev)=>{
            deleteMails(ev,
                nameInputEl,
                titleInputEl);
        })
    }

    function deleteMails(ev,
        nameInputEl,
        titleInputEl){
        ev.target.parentNode.parentNode.remove();
        let li = document.createElement("li");
        elGenerator("span", `${nameInputEl}`, li);
        elGenerator("span", `${titleInputEl}`, li);
        trashUlEl.appendChild(li);
    }

    resetButtonEl.addEventListener("click", (ev)=>{
        clearInputFields();
    })

    function elGenerator(type, content, parent){
        const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }

    function clearInputFields(){
        nameInputEl.value="";
        titleInputEl.value="";
        messageInputEl.value="";
    }
}
solve()