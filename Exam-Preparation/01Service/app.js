window.addEventListener('load', solve);

function solve() {
    let productTypeEl = document.getElementById("type-product");
    let descriptionIputEl = document.getElementById("description");
    let clientNameInputEl = document.getElementById("client-name");
    let clientPhoneInputEl = document.getElementById("client-phone");
    let receivedOrdersEl = document.getElementById("received-orders");
    let completedOrdersEl = document.getElementById("completed-orders");

    let sendFormButtonEl = document
    .getElementsByTagName("button")[0]
    .addEventListener("click", (ev)=>{
        ev.preventDefault();
        if(descriptionIputEl.value!=="" &&
        clientNameInputEl.value!=="" &&
        clientPhoneInputEl.value!=="") {
            sendToReceivedOrders(
                ev,
                productTypeEl.value,
                descriptionIputEl.value,
                clientNameInputEl.value,
                clientPhoneInputEl.value
            );
            clearInputFields();
        }
    });

    let clearButtonEl = document
    .getElementsByClassName("clear-btn")[0]
    .addEventListener("click", (ev)=>{
        let allDivs = Array.from(completedOrdersEl.querySelectorAll('div'));
        allDivs.forEach(element => {
            element.remove();
        });
    })

    function sendToReceivedOrders(
        ev,
        productTypeEl,
        descriptionIputEl,
        clientNameInputEl,
        clientPhoneInputEl
    ) {
        let div = document.createElement("div");
        div.setAttribute("class", "container");
        elGenerator("h2", `Product type for repair: ${productTypeEl}`, div);
        elGenerator("h3", `Client information: ${clientNameInputEl}, ${clientPhoneInputEl}`, div);
        elGenerator("h4", `Description of the problem: ${descriptionIputEl}`, div);
        let startButton = elGenerator("button", "Start repair", div);
        let finishButton = elGenerator("button", "Finish repair", div);

        startButton.setAttribute("class", "start-btn");
        startButton.addEventListener("click", (ev)=>{
            ev.target.setAttribute("disabled", "");
            finishButton.removeAttribute("disabled");
        })
        finishButton.setAttribute("class", "finish-btn");
        finishButton.setAttribute("disabled", "");
        finishButton.addEventListener("click", (ev)=>{
            moveToCompleteOrders(
                ev,
                productTypeEl,
                descriptionIputEl,
                clientNameInputEl,
                clientPhoneInputEl
            )
        })

        receivedOrdersEl.appendChild(div);
    }

    function moveToCompleteOrders(
        ev,
        productTypeEl,
        descriptionIputEl,
        clientNameInputEl,
        clientPhoneInputEl
    ){
        ev.target.parentNode.remove();

        let div = document.createElement("div");
        div.setAttribute("class", "container");
        div.setAttribute("class", "container");
        elGenerator("h2", `Product type for repair: ${productTypeEl}`, div);
        elGenerator("h3", `Client information: ${clientNameInputEl}, ${clientPhoneInputEl}`, div);
        elGenerator("h4", `Description of the problem: ${descriptionIputEl}`, div);

        completedOrdersEl.appendChild(div);
    }

    

    function clearInputFields() {
        descriptionIputEl.value="";
        clientNameInputEl.value="";
        clientPhoneInputEl.value="";
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