import React, {useEffect, useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
const FormEdit = () => {
  const init_data = {
    name:"",
    quantity:"",
    price:""
  }
  const [data, setData] = useState(init_data)
  const {_id} = useParams()
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  useEffect(() => {
    getInputProductControl(_id)
  },[_id])
  const getInputProductControl = async (_id) => {
    let url = `http://localhost:1997/api/product/edit/${_id}`
    let result = await axios.get(url)
    setData(result.data)
  }
  const handleUpdate = async () => {
    let updated_product = {
     name:data.name,
     quantity:data.quantity,
     price:data.price
    }
    let update_url = await axios.put(`http://localhost:1997/api/product/update/${_id}`, updated_product)
    setData(update_url.data)
    navigate("/product/list")
  }
  return(
   <>
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
            value={data.price.toLocaleString()} 
            onChange={handleOnChange}
           />
        </Form.Group>
        <Form.Group className="mb-4">
          <Button onClick={() => handleUpdate(_id)}>Update</Button>
        </Form.Group>
      </Form>
    </Container>
   </>
  )
}
export default FormEdit