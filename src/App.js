
import { useState } from "react";
import useFetch from "./hooks/useFetch"
import "./style.css"
import Header from "./Header";
function App() {
  const [count,updateCount]=useState(0)
  const [data] = useFetch("https://catfact.ninja/fact",count)
 
  function refresh() {
    updateCount(count+1)
  }
  return (
    <>
    <Header/>
    <div className="container">
      <div className="p-img">
        <p>{data && data.fact}</p>
        <img src={require("./assets/lovely_cat.jpg")} alt="lovely cat"/>
      </div>
      <button onClick={refresh} id="btn">new fact</button>
    </div>
    </>
  )
}

export default App;
