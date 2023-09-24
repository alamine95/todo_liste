var detailsForm = document.querySelector("#destination_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    //1. extract the value frome
    var destName = event.target.elements["name"].value;

    //2. clear out the form fields
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }

    //3. run the function
    var destTodo = createDestinationTodo(destName);

    document.querySelector("#destination_table").appendChild(destTodo);
}

function createDestinationTodo(name){
    var tr = document.createElement("tr");
    
    var tdName = document.createElement("td");
    tdName.innerText = name;
    tr.appendChild(tdName);

    var tdBtn = document.createElement("td");

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "remove";

    deleteBtn.addEventListener("click", removeTodo);
    tdBtn.appendChild(deleteBtn);

    tr.appendChild(tdBtn);

    return tr;
}

function removeTodo(event) {
    var tr = event.target.parentElement.parentElement;
    tr.remove();
}