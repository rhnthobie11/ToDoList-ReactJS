import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDoList = ({ toDo, doneTask, setUpdateData, deleteTask }) => {
  return (
    <div>
        {toDo && toDo 
      
      .map( (task, index) => {
        return(
          <div key={task.id}>

            <div className="col taskBg">


              <div className={task.status ? 'done' : ''}>
                <span className='taskNumber'>{index + 1}</span>
                <span className='taskText'>{task.title}</span>
              </div>

              <div className="iconsWrap">
                <span title='Completed / Not Completed' onClick={ (e)=> doneTask(task.id) }><FontAwesomeIcon icon={faSquareCheck}/></span>

                {task.status ? null : (
                  <span title='Edit' onClick={ ()=> setUpdateData({ 
                    id: task.id, 
                    title: task.title,
                    status: task.status ? true : false,
                  })}><FontAwesomeIcon icon={faPen}/></span>
                )}

                <span title='Delete' onClick={()=> deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan}/></span>

              </div>

            </div>

          </div>
        )
      } )
    }
    </div>
  )
}

export default ToDoList;
