import React, {useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
import {toast, ToastContainer} from "react-toastify"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addProduct} from "../features/product.slice"
const FormAdd = () => {
  const init_data = {
    name:"",
    quantity:"",
    price:""
  }
  const [data, setData] = useState(init_data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleAdd = () => {
    if(data.name === ""){
      toast.error("Please enter the name", {position:"top-center"})
      return false
    }
    if(data.quantity === ""){
      toast.error("Please choose the quantity", {position:"top-center"})
      return false
    }
    if(data.price === ""){
      toast.error("Please enter the price", {position:"top-center"})
      return false
    }else{
      let product = {
       name:data.name,
       quantity:data.quantity,
       price:data.price
      }
      dispatch(addProduct(product))
      navigate("/product/list")
    }
  }
  return(
   <>
    <ToastContainer/>
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
            name="price"
            value={data.price.toLocaleString()} 
            onChange={handleOnChange}
           />
        </Form.Group>
        <Form.Group className="mb-4">
          <Button onClick={handleAdd}>Submit</Button>
        </Form.Group>
      </Form>
    </Container>
   </>
  )
}
export default FormAdd