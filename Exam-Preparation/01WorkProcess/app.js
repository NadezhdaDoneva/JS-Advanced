function solve() {
    let firstNameInputEl = document.getElementById("fname");
    let lastNameInputEl = document.getElementById("lname");
    let emailInputEl = document.getElementById("email");
    let birthInputEl = document.getElementById("birth");
    let positionInputEl = document.getElementById("position");
    let salaryInputEl = document.getElementById("salary");
    let tableBodyEl = document.getElementById("tbody");
    let sumSpamEl = document.getElementById("sum");
    let budget = 0;

    let hireButton = document
    .getElementById("add-worker")
    .addEventListener("click", (ev)=>{
        ev.preventDefault();
        if (firstNameInputEl.value!=="" &&
        lastNameInputEl.value!=="" &&
        emailInputEl.value!=="" &&
        birthInputEl.value!=="" &&
        positionInputEl.value!=="" &&
        salaryInputEl.value!=="") {
            addWorker(
                ev,
                firstNameInputEl.value,
                lastNameInputEl.value,
                emailInputEl.value,
                birthInputEl.value,
                positionInputEl.value,
                salaryInputEl.value,
            );
            clearInputFields();
        }
    })

    function addWorker(
        ev,
        firstNameInputEl,
        lastNameInputEl,
        emailInputEl,
        birthInputEl,
        positionInputEl,
        salaryInputEl
    ) {
        let tr = document.createElement("tr");
        elGenerator("td", `${firstNameInputEl}`, tr);
        elGenerator("td", `${lastNameInputEl}`, tr);
        elGenerator("td", `${emailInputEl}`, tr);
        elGenerator("td", `${birthInputEl}`, tr);
        elGenerator("td", `${positionInputEl}`, tr);
        elGenerator("td", `${salaryInputEl}`, tr);
        let tdButtonsEl = document.createElement("td");
        let firedButtonEl = elGenerator("button", "Fired", tdButtonsEl);
        firedButtonEl.setAttribute("class", "fired");
        let edituttonEl = elGenerator("button", "Edit", tdButtonsEl);
        edituttonEl.setAttribute("class", "edit");

        tr.appendChild(tdButtonsEl);
        tableBodyEl.appendChild(tr);

        budget+=Number(salaryInputEl);
        sumSpamEl.textContent = budget.toFixed(2);

        edituttonEl.addEventListener("click", (ev)=>{
            editWorkersInfo(
                ev,
                firstNameInputEl,
                lastNameInputEl,
                emailInputEl,
                birthInputEl,
                positionInputEl,
                salaryInputEl
            )
        })

        firedButtonEl.addEventListener("click", (ev)=>{
            fireWorker(ev,
                firstNameInputEl,
                lastNameInputEl,
                emailInputEl,
                birthInputEl,
                positionInputEl,
                salaryInputEl)
        })

    }

    function fireWorker(ev,
        _firstNameInputEl,
        _lastNameInputEl,
        _emailInputEl,
        _birthInputEl,
        _positionInputEl,
        _salaryInputEl){
        budget-=Number(_salaryInputEl);
        sumSpamEl.textContent = budget.toFixed(2);
        ev.target.parentNode.parentNode.remove();
    }

    function editWorkersInfo(
        ev,
        _firstNameInputEl,
        _lastNameInputEl,
        _emailInputEl,
        _birthInputEl,
        _positionInputEl,
        _salaryInputEl
    ) {
        ev.target.parentNode.parentNode.remove();
        firstNameInputEl.value=_firstNameInputEl;
        lastNameInputEl.value=_lastNameInputEl;
        emailInputEl.value=_emailInputEl;
        birthInputEl.value=_birthInputEl;
        positionInputEl.value=_positionInputEl;
        salaryInputEl.value=_salaryInputEl;

        budget-=Number(_salaryInputEl);
        sumSpamEl.textContent = budget.toFixed(2);
    }

    function clearInputFields(){
        firstNameInputEl.value="";
        lastNameInputEl.value="";
        emailInputEl.value="";
        birthInputEl.value="";
        positionInputEl.value="";
        salaryInputEl.value="";
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
solve()