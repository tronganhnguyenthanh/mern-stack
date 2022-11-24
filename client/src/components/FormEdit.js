import React, {useEffect, useState} from "react"
import {Button, Container, Form} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getProductById, updateProduct} from "../features/product.slice"
import {toast, ToastContainer} from "react-toastify"
const FormEdit = () => {
  const init_data = {
    name:"",
    quantity:"",
    price:""
  }
  const [data, setData] = useState(init_data)
  const {_id} = useParams()
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    // let new_data = {...data}
    // new_data[e.target.name] = e.target.value
    setData({...data, [e.target.name]:e.target.value})
  }
  useEffect(() => {
    getInputProductControl(_id)
  },[_id])
  const getInputProductControl = async (_id) => {
    let res = await dispatch(getProductById(_id))
    setData(res?.payload)
  }
  const handleUpdate = async (_id) => {
     let product = {
      name:data.name,
      quantity:data.quantity,
      price:data.price
    }
    // console.log("product", product)
    let res = await dispatch(updateProduct(_id, product))
    console.log("res", res)
    // toast.success("Product updated successfully", {position:"top-center"})
    // navigate("/product/list")
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
            value={data.price} 
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