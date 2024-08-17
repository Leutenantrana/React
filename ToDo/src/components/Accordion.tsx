import React from 'react'
import { useState } from 'react'

const AccordionItem =({title, content, isOpen, onclick})=>{
    return(
        <div className='accordionItem'>
            <div className='header'>
                <div className='title'>{title}</div>
                <div><button onClick={onclick}>{isOpen ? '-': "+"}</button></div>
            </div>
            <div className='content'>
                <div>{isOpen && content}</div>
            </div>
        </div>
    )
}

const Accordion = () => {
    const [openIndex, setOpenindex] = useState(null);
    const onclick =(index)=>{
        setOpenindex(index === openIndex? null : index);
    }

    const notes = [
        {
            index:1,
            title: "accordion component",
            content: "accordion component allows you to toggle display"
        },
        {
            index:2,
            title: "to do list",
            content: "to do list allow you configure your schedule"
        },{
            index:3,
            title: "more coming",
            content: "more things will come in future stay tuned"
        },
    ]
  return (
    <div>
      {notes.map(note =>(
        <AccordionItem key={note.index}
          title={note.title}
          isOpen={note.index === openIndex}
          content={note.content}
          onclick={()=>onclick(note.index)}

          />
      ))}
    </div>
  )
}

export default Accordion
