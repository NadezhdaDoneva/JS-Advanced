window.addEventListener('load', solve);

function solve() {
    let modelInputEl = document.getElementById("model");
    let yearInputEl = document.getElementById("year");
    let descriptionIputEl = document.getElementById("description");
    let priceInputEl = document.getElementById("price");
    let tableBodyEl = document.getElementById("furniture-list"); 
    let money =0;
    let totalPriceEl = document.getElementsByClassName("total-price")[0];

    let addButton = document
    .getElementById("add")
    .addEventListener("click", (ev)=>{
        ev.preventDefault();
        if(modelInputEl.value!=="",
        yearInputEl.value!=="",
        descriptionIputEl.value!=="",
        priceInputEl.value!==""){
            moveToTheTable(
                ev,
                modelInputEl.value,
                yearInputEl.value,
                descriptionIputEl.value,
                priceInputEl.value);
            clearInputFields();
        }
    });

    function moveToTheTable(
        ev,
        modelInputEl,
        yearInputEl,
        descriptionIputEl,
        priceInputEl
    ){
        let price = Number(priceInputEl).toFixed(2);
        let tr = document.createElement("tr");
        tr.setAttribute("class", "info");
        elGenerator("td", `${modelInputEl}`, tr);
        elGenerator("td", `${price}`, tr);
        let tdButtons = document.createElement("td");
        let moreInfoButtonEl = elGenerator("button", `More Info`, tdButtons);
        let buyButtonEl = elGenerator("button", 'Buy it', tdButtons);
        moreInfoButtonEl.setAttribute("class", "moreBtn");
        buyButtonEl.setAttribute("class", "buyBtn");
        tr.appendChild(tdButtons);
        tableBodyEl.appendChild(tr);
        

        let trHidden = document.createElement("tr");
        trHidden.setAttribute("class", "hide");     
        elGenerator("td", `Year: ${yearInputEl}`, trHidden);
        let tdDescription = elGenerator("td", `Description: ${descriptionIputEl}`, trHidden);   
        tdDescription.setAttribute("colspan", "3");
        tableBodyEl.appendChild(trHidden);

        buyButtonEl.addEventListener("click", (ev)=>{
            buyFurniture(
                ev,
                modelInputEl,
                yearInputEl,
                descriptionIputEl,
                priceInputEl
            )
        })

        moreInfoButtonEl.addEventListener("click", (ev)=>{
            revealMoreInfo();
            function revealMoreInfo(
                ev,
                modelInputEl,
                yearInputEl,
                descriptionIputEl,
                priceInputEl
                ) {
                    if(moreInfoButtonEl.textContent=="More Info"){
                        moreInfoButtonEl.textContent = "Less Info";
                    trHidden.style.display = "contents";
                    } else{
                    moreInfoButtonEl.textContent="More Info";
                        trHidden.style.display = "none";
                    }
                }
        })

    }

    function buyFurniture(
                ev,
                modelInputEl,
                yearInputEl,
                descriptionIputEl,
                priceInputEl
    ) {
        ev.target.parentNode.parentNode.parentNode.remove();
        money+=Number(priceInputEl);
        totalPriceEl.textContent=money;

    }

    function clearInputFields(){
        modelInputEl.value="";
        yearInputEl.value="";
        descriptionIputEl.value="";
        priceInputEl.value="";
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

