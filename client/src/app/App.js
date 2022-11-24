import React from "react"
import {Route, Routes} from "react-router-dom"
import FormAdd from "../components/FormAdd"
import FormEdit from "../components/FormEdit"
import ListProduct from "../components/ListProduct"
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormAdd/>}/>
        <Route path="/product/update/:_id" element={<FormEdit/>} />
        <Route path="/product/list" element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
