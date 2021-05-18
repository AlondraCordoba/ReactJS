import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);
  const [taskEditing, setTaskEditing] = useState(null);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }

  const handleAddTask = () => {
    if (task && !items.find(item => item.task === task)) {
      setItems(prevItems => [...prevItems,
      {
        task,
        completed: false,
      }
      ]);
    }
  }

  const handleDelete = (taskToDelete) => () => {
    setItems(prevItems => [...prevItems.filter(item => item.task !== taskToDelete)]);
  };

  
  const handleComplete = (taskToComplete) => () => {
    setItems(prevItems => {
      const itemToUpdate = {
        ...prevItems.find(item => item.task === taskToComplete),
        completed: true,
      }
      return [
        ...prevItems.filter(item => item.task !== taskToComplete),
        itemToUpdate
      ];
    });
  };

  const submitEdits = (taskToEdit) => () => {
    setItems(prevItems => {
      const itemToUpdate = {
        ...prevItems.find(item => item.task === taskToEdit), task
      }
      return [
        ...prevItems.filter(item => item.task !== taskToEdit),
        itemToUpdate
      ];
    });
  };

  return (
    <div id="task-list">

      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="button" onClick={handleAddTask}>Add</button>
      </div>

    {items.map(item => ( 
          <div key={item.task} className="task">
            <span className={item.completed ? 'task-done' : ''}>
              {item.task}
            </span>
            <div className="task-text">
            {item.task === taskEditing ? (
              <input
                type="text"
                onChange={handleTaskChange}
              />
            ) : (
              <div>{item.task.text}</div>
            )}
          </div>
          <div className="task-actions">
            {item.task === taskEditing ? (
              <button onClick={submitEdits(item.task)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTaskEditing(item.task)}>Edit</button>
            )}

              <button onClick={handleDelete(item.task)}>Delete</button>
              <button onClick={handleComplete(item.task)}>Complete</button>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ToDoList;