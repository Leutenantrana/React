import React, { useEffect, useState } from 'react'
import helper from '../helperFunctions/index'
const TaskDisplay = ({task, setTasks}) => {
    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(task.status === 'complete'){
            setChecked(true)
        }else{
            setChecked(false)
        }
    },[task])
    const handleClick =(e)=>{
      e.preventDefault()
      setVisible(!visible)
    }
    const handleChange =(id)=>{
      console.log(id)
      const tasks = helper.updateData(id)
      const updateTask = tasks.find(task =>task.id === id)
      console.log("here",tasks)
      setTasks(tasks)

    }
    const handleDelete =(id)=>{
        const tasks = helper.deleteData(id);
        setTasks(tasks)
    }

    
  return (
    <div className='task'>
        <div className='taskHeader'>
                <h2 className="taskTitle">{task.task}</h2>
                <p className="hl show"> {task.status}</p>
                <button onClick={handleClick} className="dropDownBtn">🔽</button>
        </div>
            <div className={`taskInfo ${visible ? '': 'hide'}`}>
                <div className="date">
                    <p>Starting Date <span className="startingDate">{task.startDate}</span></p>
                    <p>Last Date <span className="endDate">{task.endDate}</span></p>
                </div>
                <div className="taskDetails">
                    <p className = "state">STATUS <span className="status">{task.status}</span></p>
                    <div className="importantBox">
                        <label >Complete</label>
                        <input 
                          className="important"
                          type="checkbox"
                          checked ={checked? true : false}
                          onChange={()=>handleChange(task.id)}
                          />
                    </div>
                    <button onClick={()=>handleDelete(task.id)} className="deleteBtn">DELETE</button>
                </div>
            </div>
    </div>
  )
}

export default TaskDisplay
