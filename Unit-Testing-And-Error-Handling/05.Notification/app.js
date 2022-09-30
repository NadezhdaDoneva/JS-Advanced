function notify(message) {
  let notification = document.getElementById("notification");
  notification.innerText = message;
  notification.style.display = "block";
  
  notification.addEventListener("click", (ev)=>{
    ev.target.style.display='none';
  });

}