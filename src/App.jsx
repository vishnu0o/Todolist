import React,{useState} from 'react'
import './assets/App.css'

function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  function currentdate(){
    const day = ['Sunday','Monday','Tuesday','Wednesday','thursday','Friday','Saturdayconst']
    return day[new Date().getDay()]
  }
  return (
    <div className="app">
      <div className='innerapp'>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentdate()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div> 
      <div className="todos">
        { todos.map((value)=>{

        return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>setTodos(todos.filter(obj=>{
              if(value.id==obj.id){
                obj.status = e.target.checked
              }
              return obj
            })
              )} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>setTodos(todos.filter(obj=>{
              if(value.id!=obj.id){
                return obj
              }
            }))} className="fas fa-times"></i>
          </div>
        </div>)
        })}

        <div>
          {todos.map((value)=>{
             if(value.status){
            return(
             
                <p style={{color:'red'}}>{value.text}</p>
             
            )
          }
           
            
          })}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default App

