import React, { useState } from 'react';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import ToDoList from './components/ToDoList';
import './App.css'

function App() {
  
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');


  //add Task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  //delete Task
  const deleteTask = (id) => {
    let newTask = toDo.filter( task => task.id !== id)
    setToDo(newTask);
  }

  //mark Task
  const doneTask = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return({...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  //cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEntry);
  }
  
  //update task
  const updateTask = () => {
    let filterRecods = [...toDo].filter( task => task.id !== updateData.id );
    let updateObject = [...filterRecods, updateData];
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br />
      <h2 className='mb-5'>What's the plan for today?</h2>
      <br />

      {/* update task */}
      { updateData && updateData ? (
        <UpdateForm 
        updateData={updateData}
        changeTask={changeTask} 
        updateTask={updateTask} 
        cancelUpdate={cancelUpdate} />
      ) : (
        <AddForm 
        newTask={newTask} 
        setNewTask={setNewTask} 
        addTask={addTask} />
      )}


      {toDo && toDo.length ? '' : <h3>organize your activities!</h3>}

      <ToDoList 
      toDo={toDo}
      doneTask={doneTask} 
      setUpdateData={setUpdateData} 
      deleteTask={deleteTask}
      />

    </div>
  )
}

export default App
