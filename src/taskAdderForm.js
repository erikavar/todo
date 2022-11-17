import { format } from 'date-fns';

const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit");

const taskTitle = document.createElement("input");
taskTitle.setAttribute("type", "text");
taskTitle.setAttribute("name", "taskTitle");
taskTitle.setAttribute("id", "taskTitle");
taskTitle.setAttribute("placeholder", "New task title");
taskTitle.setAttribute("autocomplete", "off");

const taskLabel = document.createElement("input");
taskLabel.setAttribute("type", "text");
taskLabel.setAttribute("name", "taskLabel");
taskLabel.setAttribute("id", "taskLabel");
taskLabel.setAttribute("placeholder", "Project");
taskLabel.setAttribute("autocomplete", "off");

const taskPriority = document.createElement("input");
taskPriority.setAttribute("type", "text");
taskPriority.setAttribute("list", "priorityOptions");
taskPriority.setAttribute("name", "taskPriority");
taskPriority.setAttribute("id", "taskPriority");
taskPriority.setAttribute("placeholder", "Priority");
taskPriority.setAttribute("autocomplete", "off");

const priorityOptions = document.createElement("datalist");
priorityOptions.setAttribute("id", "priorityOptions");

const option1 = document.createElement("option");
option1.setAttribute("value", "Urgent");
priorityOptions.appendChild(option1);

const option2 = document.createElement("option");
option2.setAttribute("value", "High");
priorityOptions.appendChild(option2);

const option3 = document.createElement("option");
option3.setAttribute("value", "Normal");
priorityOptions.appendChild(option3);

taskPriority.appendChild(priorityOptions);

const dueDate = document.createElement("input");
dueDate.setAttribute("type", "text");
dueDate.setAttribute("name", "dueDate");
dueDate.setAttribute("id", "dueDate");
dueDate.setAttribute("placeholder", "Due date");
dueDate.setAttribute("onfocus","(this.type='date')");
dueDate.setAttribute("autocomplete", "off");

const s = document.createElement("button");
s.setAttribute("type", "button");
s.setAttribute("class", "addTaskBtn");
s.textContent = "Add to list";

form.appendChild(taskTitle);
form.appendChild(taskLabel);
form.appendChild(taskPriority);
form.appendChild(dueDate);
form.appendChild(s);

export default form;