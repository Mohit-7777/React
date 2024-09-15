import { useState } from "react";
import "./index.css";

function App() {

 const [counter, setCounter]= useState(0);


  const doThis = () =>{
    console.log(Math.floor(Math.random() * 10)+1);
    setCounter(counter+1)
    
  }
  const doThat = () => {
    console.log(Math.floor(Math.random() * 10) + 1);
    if(counter>0){
      setCounter(counter - 1);
    }
    
  };


  return (
    <>
      <div className="flex  flex-col items-center justify-center h-[100vh]">
        <h1 className=" bg-green-500  rounded-l p-4">
          Lets Learn React Again!!!
        </h1>
        <button
          className=" w-auto  bg-green-500 m-4 p-4  text-red-700 rounded xl"
          onClick={doThis}
        >
          Increase the number: {counter}
        </button>
        <button
          className=" w-auto  bg-red-400 m-4 p-4  text-black-700 rounded xl"
          onClick={doThat}
        >
          Decrease the number : {counter}
        </button>
      </div>
    </>
  );
}

export default App
