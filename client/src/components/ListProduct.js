import axios from "axios"
import React, {useEffect, useState} from "react"
import {Button, Container, Table} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"
const ListProduct = () => {
  const navigate = useNavigate()
  const [prod_list, setProdList] = useState([])
  useEffect(() => {
   handleGetProductList()
  },[])
  const handleGetProductList = () => {
   axios.get("http://localhost:1997/api/product/list").then((res) => {
     setProdList(res.data)
   })
  }
  const goBack = () => {
    navigate("/")
  }
  const editProduct = (_id) => {
    navigate(`/product/edit/${_id}`)
  }
  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:1997/api/product/delete/${_id}`)
    toast.success("Product deleted successfully", {position:"top-center"})
    handleGetProductList()
  }
  return (
   <>
    <ToastContainer/>
    <Container>
      <h1 className="text-center text-primary">List Products</h1>
      <Table bordered hover striped responsive>
        <thead className="bg-dark">
           <tr>
             <th className="text-center text-white">Name</th>
             <th className="text-center text-white">Quantity</th>
             <th className="text-center text-white">Price</th>
             <th className="text-center text-white">Total</th>
             <th className="text-center text-white">Action</th>
           </tr>
        </thead>
        <tbody>
          {prod_list.map((i, index) => {
            return(
             <tr key={index}>
               <td className="text-center align-middle">{i.name}</td>
               <td className="text-center align-middle">{i.quantity}</td>
               <td className="text-center align-middle">{(i.price.toLocaleString())}</td>
               <td className="text-center align-middle">{(i.quantity * i.price).toLocaleString()}</td>
               <td className="d-flex justify-content-center">
                 <Button className="btn btn-info text-white" onClick={() => editProduct(i._id)}>Edit</Button>
                 <Button className="btn btn-danger text-white" style={{marginLeft:"5%"}} onClick={() => handleDelete(i._id)}>Delete</Button>
               </td>
             </tr>
            )
           })
          }
        </tbody>
      </Table>
      <Button onClick={goBack}>Back</Button>
    </Container>
   </>
  )
}

export default ListProduct