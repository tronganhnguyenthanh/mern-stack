import React from "react"
import {Route, Routes} from "react-router-dom"
import FormAdd from "../components/FormAdd"
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormAdd/>}/>
      </Routes>
    </div>
  )
}

export default App
