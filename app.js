const inputField = document.getElementById("task-in");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container"); 

addBtn.onclick = function(){
    if(inputField.value)
    {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.textContent = inputField.value;
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        listContainer.appendChild(li);
    }
     inputField.value = "";
     saveData();
}
listContainer.onclick = function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
        }
    else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
          saveData();
    }

}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();


























































// const listContainer = document.getElementById("list-container");
// const inputField = document.getElementById("task-in");
// const addBtn = document.getElementById("add-btn");
// addBtn.onclick = function(){
//     console.log("button clicked!");
//     console.log(document.querySelector("ul"));
//     if(inputField.value!=""){
//         let li = document.createElement("li");
//         li.innerHTML = inputField.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
// }
// listContainer.addEventListener("click", function(e){
//     console.log(e);
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }
// },false);
