import React, { useState, useEffect, Component } from "react";

export const Todo = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([{ label: "", done: false }]);

	const handleChange = event => {
		setTask(event.target.value);
	};

	const getList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IAMJORGEVILLARREAL", {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				setList(
					response.map((item, index) => {
						return item; 
					})
				);
			});
	};


	// Load the list from local storage when the component mounts
	useEffect(() => {
	const storedList = JSON.parse(localStorage.getItem('todoList'));
	if (storedList) {
		setList(storedList);
	}
	}, []);

	// Save the list to local storage when it changes
	useEffect(() => {
	localStorage.setItem('todoList', JSON.stringify(list));
	}, [list]);


	const createList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IAMJORGEVILLARREAL", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({ emptyArray: []})
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
	

	const updateList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IAMJORGEVILLARREAL", {
			method: "PUT",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(list)
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/IAMJORGEVILLARREAL", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.error(error);
			});
	};
	

	const handleSubmit = event => {
		if (task.trim() && task.length !== 0) {
			setList(list.concat({ label: task, done: false }));
		} else {
			alert("Task can not be empty");
		}
		console.log(list);
		setTask("");
		event.preventDefault();
	};

	const removeTodo = index => {
		const newTodos = [...list];
		newTodos.splice(index, 1);
		setList(newTodos);
        updateList();
	};
	//updateList();

	useEffect(() => {
        // console.log("CREATE LIST FUNCTION")
        // createList();
		getList();
	}, []);

	return (
		<div className="container">
			<h1 className="title">
				To Do List
				<i className="fas fa-tasks" />
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="d-inline-block align-middle divInput"
					type="text"
					value={task}
					onChange={handleChange}
					placeholder="What's next to be done?"
				/>
				<button className="btn btn-primary addTask" type="submit">
					Add Task
				</button>
			</form>

			<ul className="list-group">
				{list.map((item, index) => (
					<li className="list-group-item d-flex" key={index}>
						{item.label}
						<i onClick={removeTodo} className="far fa-trash-alt ms-auto" />
					</li>
				))}
				<div className="taskCounter">
					You have <strong className="length">{list.length} tasks to do </strong>
				</div>
			</ul>

		</div>
	);
};
export default Todo;