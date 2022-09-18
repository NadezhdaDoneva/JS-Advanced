window.addEventListener('load', solve);

function solve() {
    let genreInputEl = document.getElementById("genre");
    let songNameInputEl = document.getElementById("name");
    let authorInputEl = document.getElementById("author");
    let dateInputEl = document.getElementById("date");
    let collectionOfSongsEl = document.getElementsByClassName("all-hits-container")[0];
    let savedSongsEl = document.getElementsByClassName("saved-container")[0];
    let likesParagraphEl = document
    .getElementsByClassName("likes")[0]
    .querySelector("p");
    let likes = 0;


    

    let addSongButtonEl = document
    .getElementById("add-btn")
    .addEventListener("click", (ev)=>{
        ev.preventDefault();
        addToCollection(
            ev,
            genreInputEl.value,
            songNameInputEl.value,
            authorInputEl.value,
            dateInputEl.value
        );
        clearInputFields();
    })

    function addToCollection(
        ev,
        genreInputEl,
        songNameInputEl,
        authorInputEl,
        dateInputEl
    ){
        let div = document.createElement("div");
        div.setAttribute("class", "hits-info");
        let img = document.createElement("img");
        img.setAttribute("src", "./static/img/img.png");
        div.appendChild(img);
        elGenerator("h2", `Genre: ${genreInputEl}`, div);
        elGenerator("h2", `Name: ${songNameInputEl}`, div);
        elGenerator("h2", `Author: ${authorInputEl}`, div);
        elGenerator("h3", `Date: ${dateInputEl}`, div);
        let saveButtonEl = elGenerator("button", "Save song", div);
        let likeButtonEl = elGenerator("button", "Like song", div);
        let deleteButtonEl = elGenerator("button", "Delete", div);

        saveButtonEl.setAttribute("class", "save-btn");
        saveButtonEl.addEventListener("click", (ev)=>{
            movetoSavedSongs(
                ev,
                genreInputEl,
                songNameInputEl,
                authorInputEl,
                dateInputEl
            )
        })
        likeButtonEl.setAttribute("class", "like-btn");
        likeButtonEl.addEventListener("click", (ev)=>{
            likeSong(ev);
        })
        deleteButtonEl.setAttribute("class", "delete-btn");
        deleteButtonEl.addEventListener("click", (ev)=>{
            deleteSong(ev);
        })

        collectionOfSongsEl.appendChild(div);
        
    }

    function movetoSavedSongs(
        ev,
        genreInputEl,
        songNameInputEl,
        authorInputEl,
        dateInputEl
    ) {
        ev.target.parentNode.remove();
        let div = document.createElement("div");
        div.setAttribute("class", "hits-info");
        let img = document.createElement("img");
        img.setAttribute("src", "./static/img/img.png");
        div.appendChild(img);
        elGenerator("h2", `Genre: ${genreInputEl}`, div);
        elGenerator("h2", `Name: ${songNameInputEl}`, div);
        elGenerator("h2", `Author: ${authorInputEl}`, div);
        elGenerator("h3", `Date: ${dateInputEl}`, div);
        savedSongsEl.appendChild(div);
        let deleteButtonEl = elGenerator("button", "Delete", div);
        deleteButtonEl.setAttribute("class", "delete-btn");
        deleteButtonEl.addEventListener("click", (ev)=>{
            deleteSong(ev);
        })

    }

    function deleteSong(ev){
        ev.target.parentNode.remove();
    }

    function likeSong(ev) {
        ev.target.setAttribute("disabled", "");
        likes++;
        let likesEl = likesParagraphEl.textContent.split(" ");
        likesEl.pop();
        likesEl.push(likes);
        likesParagraphEl.textContent = likesEl.join(" ");
    }

    function clearInputFields(){
        genreInputEl.value="";
        songNameInputEl.value="";
        authorInputEl.value="";
        dateInputEl.value="";
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