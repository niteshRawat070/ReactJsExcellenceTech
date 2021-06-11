import React, { useState,useEffect } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [page,setPage]=useState(0);
  // const [userNumber,setUserNumber]=useState(1)
  const [avatar,setAvatar]=useState();
  useEffect(()=>{
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then((response)=>response.json())
    .then((response)=>{
      console.log(response.data[1].email);
      setName(response.data[1].first_name);
      setEmail(response.data[1].email);
      setAvatar(response.data[1].avatar)
    })
  },[name,email,page,avatar]);
  return(
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <button style={{padding:'10px',margin:'0 15px'}} onClick={()=>{
          if(page===0){
            setPage(2)
          }else{
            setPage(page-1)
          }
        }}>Previous Page</button>
        <h1>Page no {page} users</h1>
        <button style={{padding:'10px',margin:'0 15px'}} onClick={()=>{
          if(page===2){
            setPage(0)
          }else{
            setPage(page+1)
          }
        }}>Next page</button>
      </div>
    <Card image={avatar} name={name} email={email}/>
    </div>
  );
}

export default App;
