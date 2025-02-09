import { useState } from 'react'
import { Data } from './data'
import '../../src/index.css'
const Todo=()=>{
    const [todo,setTodo] = useState(Data)
    const deleteHandler=(id)=>{
        setTodo((oldPerson)=>{
            let newPeople=oldPerson.filter((person)=>person.id!==id)
            return newPeople
        })
    }
    return(
        <>
        {todo.map((person)=>{
            return(
                <div className='item' key={person.id}>
                    <h4>{person.name}</h4>
                    <button className='btn' onClick={()=>deleteHandler(person.id)}>Clear</button>
                </div>
            )
        })}
        <button className='btn'onClick={()=>setTodo([])}>Clear All</button>
        </>
    )
}
export default Todo