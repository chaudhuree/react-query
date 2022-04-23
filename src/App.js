import { useQuery } from 'react-query';
import './App.css';
function App() {
  // const {data,error}=useQuery("hello",()=>{
  //   return Promise.resolve(4)
  // })
  // console.log(data,error);
  const {data:data2,isError,isLoading,isSuccess}=useQuery("hello2",()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(5)
      },1000)
    }
    )
  })
  console.log({data2,isError,isLoading,isSuccess});
  return (
    <div className="App">
      <h2>chaudhuree</h2>
    </div>
  );
}

export default App;
