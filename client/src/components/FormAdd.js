import React, {useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
import axios from "axios"
const FormAdd = () => {
  const init_data = {
    name:"",
    quantity:"",
    price:""
  }
  const [data, setData] = useState(init_data)
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleAdd = () => {
    
  }
  return(
   <Container>
      <h1 className="text-center text-primary">Product App System</h1>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name="name"
            value={data.name}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
             type="number" 
             name="quantity"
             value={data.quantity}
             onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number" 
            name="price"
            value={data.price} 
            onChange={handleOnChange}
           />
        </Form.Group>
        <Form.Group className="mb-4">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
   </Container>
  )
}
export default FormAdd