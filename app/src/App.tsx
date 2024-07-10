import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import noteService from './services/notes'
import './App.css'
import axios from 'axios'
function Apps() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing')

  async function handleSubmit(e){
   e.preventDefault();
   setStatus('sending')
   await sendMessage(text);
   setStatus('sent')
  }
  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if(isSent){
   return(
     <h1>Thanks for the feedback</h1>
   )
  }
 
 
   
   return (
     <form onSubmit={handleSubmit}>
       <p>How was your stay at The Prancing Pony?</p>
       <textarea
         disabled={isSending}
         value={text}
         onChange={e => setText(e.target.value)}
       />
       <br />
       <button
         disabled={isSending}
         type="submit"
       >
         Send
       </button>
       {isSending && <p>Sending...</p>}
     </form>
   );
   
 
}
function sendMessage(text){
  return new Promise(resolve =>{
    setTimeout(resolve,2000)
  })
}

function Button(props){
  return(
    <button onClick={props.onClick}>
       {props.text}
    </button>
  )
}

// conact returns a new array 
// and push mutates the same array

function Mutate(){
  const [mainArray , setmainArray] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const handLeftClick = () =>{
    setmainArray(mainArray.concat('L'))
    setLeft(left + 1);

  }
  const handRightClick = () =>{
    setmainArray(mainArray.concat('R'))
    setRight(right + 1);

  }
  return(
    <>   
           <p>{left}</p>
           <p>{right}</p>

          <Button onClick = {handLeftClick} text='left' />
          <Button onClick = {handRightClick} text='right' />
          <p>{mainArray.join('')}</p>

          
    
    </>

  )
}
// Conditional Rendering
const History = (props)=>{
  console.log(props)
   
  if(props.allClicks.length === 0){
    return (
      <div>
        <p>The app works with clicking the Button</p>
      </div>
    )
  }
  if(props.allClicks.length === 10){
    return (
      <div>
        <p>10 clicks has been done</p>
        <p>`{props.left> props.right ? 'Left is winnning' : 'Right is winning'}`</p>
      </div>
    )
  }
  return (
    <div>
      Button press history : {props.allClicks.join('')}
    </div>
  )
}

// State changes just before the rerendering
function StateIsAsync(){
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  // let's handle it
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1;
    setLeft(updatedLeft)
    setTotal( updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1;
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }
  return(
    <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        
        < History allClicks ={allClicks} left ={left} right={right} />
  </div>

  )
}

// anecdote exercise

// Highest Voted Anecdote



const Anecdote = () =>{
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected , setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


  const handleNextAnecdote = () =>{
    const randomAnecdoteIndex =  Math.floor(Math.random()*anecdotes.length);
    setSelected(randomAnecdoteIndex)
  }
  const handleVote = () =>{
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes) 
  }
  const getMostVotedIndex =()=>{
    return votes.indexOf(Math.max(...votes))
  }
  const maxVotes  = Math.max(...votes)
  console.log(maxVotes)


 

  return(
    <>
      <p>{anecdotes[selected]}</p>
      <Button text ="next" onClick ={handleNextAnecdote} />
      <Button text="vote" onClick={handleVote} />
      <br />
      <br />
      <br />
       
       {maxVotes === 0 ? (<p>Start Casting votes</p>):(<div><h1>Anecdote with most votes</h1>      
       <p>{anecdotes[getMostVotedIndex()]} <br /> It has {votes[getMostVotedIndex()]}</p>
       </div> ) }
       

        
    </>
  )
}

const AppOfExercise = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h2>Web development curriculum</h2>
      
        {courses.map(course =>{
          const sumOfExercise = course.parts.reduce((sum,part)=> sum + part.exercises,0)
           return(
            <li key={course.id}>
            {course.name }  
            <ul>
              {course.parts.map(part => (
                <li key={part.id}>{part.name}: {part.exercises}</li>
              ))}  
            </ul>  
            <p>Total exercises : {sumOfExercise}</p>        
          </li>
           )
          
           
        })}
       
    </div>

  )
}

const Note =({note, toggleImportance})=>{
  const label = note.important ? 'make not important' : 'make important';
  return(
    <li key={note.id}>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const App = ()=>{
   const [notes , setNotes] = useState([])

   const [newNote, setNewNote] = useState('a new Note')
   const [showAll , setShowAll] = useState(true)

   useEffect(()=>{
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes)
      })
   }, [])

   

   const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

   function addNote(e){
      e.preventDefault();
      const noteObject = {
        content: newNote,
        important: Math.random < 0.5,
        id: `${notes.length + 1}`,
      }

      noteService
      .create(noteObject)
        .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })

   }

   function handleNoteChange(e){
    e.preventDefault();
    setNewNote(e.target.value)
   }
   function toggleImportance(id){
    console.log(id)
     const url = `http://localhost:3001/notes/${id}`
     const note = notes.find(n=> n.id === id)
     const changedNote = {...note, important: !note.important}

     noteService
     .update(id, changedNote)
       .then(returnedNote => {
       setNotes(notes.map(note => note.id !== id ? note : returnedNote))
     })
     .catch(error => {
       alert(
         `the note '${note.content}' was already deleted from server`
       )
       setNotes(notes.filter(n => n.id !== id))
     })

   }

   return(
    <div>

     
          <h1>Notes</h1>
          <button onClick={()=>setShowAll(!showAll)}>
            show{showAll? ' important':' all'}
          </button>

      
      {notesToShow.map(note => (
        <Note note={note}  toggleImportance={()=>toggleImportance(note.id)} />
        // <li key={note.id}>{note.content}</li>
      ))}

      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type='submit'>Save Note</button>
      </form>
    </div>
   )

}
// ________________________________________________________________ //

// Phonebook exercise //

const Display= ({users})=>{

  return(
     <div>
       {users.map(user => (

        <li key={user.id}>{user.name } : {user.number}</li>
       ))}
     </div>
  )

}

const AddNewUser =({users, setUsers})=>{
  
  const [newUser , setNewUser] = useState('a new user')
  const [newUserPhone , setNewUserPhone] = useState('00000')

  function addNewUser(e){
    e.preventDefault();
    const newUserObject = {
      name: newUser, 
      number: newUserPhone,
      id : users.length + 1,

    }
    setUsers(users.concat(newUserObject))
    setNewUserPhone('')
    setNewUser('')
  }

  function makeUserNameChanges(e){
    e.preventDefault();
    setNewUser(e.target.value);
  }
  function makeUserPhoneChanges(e){
    e.preventDefault();
    setNewUserPhone(e.target.value);
  }


   return(
    <div>
      <h1>Add new Note</h1>
      <form onSubmit={addNewUser}>
        <input value={newUser} onChange={makeUserNameChanges} />
        <br />
        <input value={newUserPhone} onChange={makeUserPhoneChanges} />
        <br />

        <button onClick={addNewUser}>
          Save User
        </button>


      </form>
    </div>
   )

}


const Appaaa=()=>{
  const [users, setUsers] = useState([]);
  const [filterText, setFliterText] = useState('')

  useEffect(()=>{
    axios
      .get('http://localhost:3011/persons')
      .then(response =>{
        setUsers(response.data)
      })
  }, [])
  
  function handleChange(e){
    e.preventDefault()
    setFliterText(e.target.value)

  }

  const filteredPersons = users.filter(person =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return(
    <>
      <h1>PhoneBook</h1>
      <input value={filterText} onChange={handleChange} />
      <Display users= {filteredPersons} />
      <AddNewUser users ={users} setUsers={setUsers} />

    </>
  )


}













export default App
