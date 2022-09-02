// Pulls the relevant elements from the html elements and assigns them to variables form, input and list_el
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

        // declaring variable task which is the input which is entered into the new-task-input
		const task = input.value;

        // creating a new element type task_el which has the same css properties as task defined in main.css
		const task_el = document.createElement('div');
		task_el.classList.add('task');

        // creating a new element type which has the same css properties as the content defined in main.css
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

        // creating a new element which holds the the new task entered i.e task 
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
        // creating a new element which holds the edit button with each task element 
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

        // creating a new element which holds the edit button with each task element 
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        // appendng the task edit and delete elements to the parent task_actions_element node
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

        // appending the task_action_el to the parent task_el node
		task_el.appendChild(task_actions_el);

        // appending task_el element to the parent list_el node
		list_el.appendChild(task_el);

        // once the new task has been added reset new task input box to be empty 
		input.value = '';

        // Building functionality for editing an existing task, by changing the inner Text of the edit element and removing 
        // the read only nature of the input element 
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});