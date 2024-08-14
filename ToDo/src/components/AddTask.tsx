import React from 'react'
import { useState } from 'react'
import helper from '../helperFunctions/index'
import { v4 as uuidv4 } from 'uuid'; 
const AddTask = ({tasks,setTasks}) => {
  const [visible, setVisible] = useState(false)
  const [taskname, setTaskname] = useState('')
  const [startDate, setStartdate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleClick =(e)=>{
    e.preventDefault();
    setVisible(!visible)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('submit')
    const newtask = {
        task: taskname,
        status: helper.getStatus(startDate, endDate),
        startDate: startDate,
        endDate: endDate,
        id : uuidv4(),

    }
    console.log(newtask)
    const tasksToadd = tasks ? tasks.concat(newtask) : newtask;  
    setTasks(tasksToadd)
    helper.saveDataToLocalStorage(newtask)

  }
  console.log("taskname:", taskname )

  return (
      <section className="newTask">
            <header>
                <div className="newTaskContainer">
                    <p>Add new Task</p>
                    <button className="addTaskBtn"  onClick={handleClick}> + </button>
                </div>
            </header>

            <form onSubmit={handleSubmit} className={`newForm ${visible ? '': 'hide'}`}>
                <p className="enter">Enter a New Task</p>
                <div className="taskInputBox">
                    <label for="taskInput">Enter new Task</label>
                    <input 
                      id="taskInput" 
                      className="taskInput inp" 
                      type="text"
                      placeholder="add new task"
                      value={taskname}
                      onChange={(e)=>setTaskname(e.target.value)}
                    />

                </div>
                <div className="dateInput">
                    <div className="start">
                        <label for="startingDate">Starting Date</label>
                        <input 
                          id="startingDate"
                          className="inp"
                          type="date"
                          value={startDate}
                          onChange={(e)=>setStartdate(e.target.value)}    
                          />
                    </div>

                    <div className="start">
                        <label for="lastDate">Last Date</label>
                        <input 
                          id="lastDate" 
                          className="inp"
                          type="date"
                          value={endDate}
                          onChange={(e)=>setEndDate(e.target.value)}    
                        />
                    </div>
                </div>
                <button type='submit' className="addBtn button">Add note</button>
            </form>

        </section>
    
  )
}

export default AddTask
