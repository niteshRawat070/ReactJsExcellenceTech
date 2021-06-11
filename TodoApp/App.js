import React, { useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo]=useState('');
  const [todoList,setTodoList]=useState([]);

  const handleClick=()=>{
    setTodoList([...todoList,todo])
  }
  return (
    <div className='mainContainer'>
         <div className='textContainer'>
            <h1 style={{textAlign:'center',color:'white'}}>Todo List</h1>
         </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100vh',flexDirection:'column'}}>
        <div style={{display:'flex',height:'20vh',alignItems:'center'}}>
        <input 
        placeholder="Enter your tasks"
        style={{
          color:'white',backgroundColor:'#42b3f5',padding:'10px 30px',
          borderRadius:'20px',outline:'none'
        }}
        value={todo}
        onChange={e=>setTodo(e.target.value)}
        />
        <button style={{margin:'0 30px',borderColor:'white',color:'#42b3f5',borderRadius:'20px',padding:'7px 10px',fontSize:'20px',letterSpacing:'2px'}}
        onClick={handleClick}
        >Add Todo</button>
        </div>
        <div style={{display:'flex',width:'100%',height:'80vh',flexDirection:'column'}}>
          <div className='todoListItemsContainer'>
        {todoList.map((tod,i)=>(
          <div key={i} className='todoListItems'>
            <p style={{textAlign:'center',color:'#42b3f5'}}>{tod}</p>
          </div>
  ))}</div>
  </div>
      </div>
      </div>
  );
}

export default App;
