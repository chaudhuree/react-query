import React from 'react';
import { useQuery } from 'react-query';
import './App.css';
const Button=()=>{
  const {data:data2,isError,isLoading,isSuccess}=useQuery("hello2",()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(Math.random())
      },1000)
    }
    )
  })
  console.log({data2,isError,isLoading,isSuccess});
  return <button>i am a button {data2}</button>
}
function App() {
  const [visible,setVisible]=React.useState(true);
  // const {data,error}=useQuery("hello",()=>{
  //   return Promise.resolve(4)
  // })
  // console.log(data,error);
const toggleButton=()=>setVisible(!visible)
  return (
    <div className="App">
      <h2>chaudhuree</h2>
      {visible && <Button/>}
      <br />
      <button onClick={toggleButton}>toggle </button>
    </div>
  );
}

export default App;
