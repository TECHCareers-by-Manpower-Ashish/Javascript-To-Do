

let taskInput=document.querySelector("new-task");
let addButton=document.querySelector("button")[0];
let incompleteTaskHolder=document.querySelector("incomplete-tasks");
let completedTasksHolder=document.querySelector("completed-tasks");



let createNewTaskElement=function(taskString){

	let listItem=document.createElement("li");

	
	let checkBox=document.createElement("input");
	
	let label=document.createElement("label");
	
	let editInput=document.createElement("input");

	let editButton=document.createElement("button");


	let deleteButton=document.createElement("button");

	label.innerText=taskString;

	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



