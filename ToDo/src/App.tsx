import React from 'react'
import { useState, useEffect } from 'react'
import TaskDisplay from './components/TaskDisplay'
import AddTask from './components/AddTask'
import './App.css'
import helper from './helperFunctions/index'
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [openIndex, setOpenindex] = useState(null);
  const onClick =(index)=>{
    setOpenindex(index === openIndex? null: index)
  }
  useEffect(()=>{
    setTasks(helper.getData())
  },[])

  return (
    <div className='mainClass'>
      <div class="mainHeader">
        <p class="header h1 showShadow"> Your TO-DO List</p>
      </div>
      <p className="p2">TASKS</p>
      { tasks && tasks.map(task=>(
          <TaskDisplay key={task.id}
           task={task}
           setTasks={setTasks}
           isOpen={task.id === openIndex}
           onClick={()=>onClick(task.id)}
           />
      ))}
      
      <AddTask tasks={tasks} setTasks={setTasks}  />
    </div>
  )
}

export default App
