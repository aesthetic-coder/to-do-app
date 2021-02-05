var listOfActivities = []   
var input = document.getElementById("input") 
var todolist = document.getElementById("todolist")
document.getElementById("button").onclick = click;

// Adding a to-do activity

  function click() { 
    listOfActivities.push(input.value)  
    console.log(listOfActivities);
    input.value="" 
    showList()
}

function showList(){
  todolist.innerHTML = " "
   listOfActivities.forEach( function(n,i) {
   todolist.innerHTML += ("<li>"+n+                      
  "<a onclick='editItem("+i+")'>Edit</a>"+                     
   "<a onclick='deleteItem("+i+")'>&times | </a></li>")
  } )
} 


//Deleting an activity

function deleteItem(i){
listOfActivities.splice(i,1)
showList()

}

//Editing an activity

function editItem(i) {
    var newValue = prompt("Please insert your new value")
    listOfActivities.splice(i,1,newValue)
   showList()
}