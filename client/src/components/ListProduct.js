import React, {useEffect} from "react"
import {Button, Container, Table} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"
import {deleteProductById, getProduct} from "../features/product.slice"
const ListProduct = () => {
  const navigate = useNavigate()
  const product = useSelector(state => state.product.products)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getProduct())
  },[dispatch])
  const goBack = () => {
    navigate("/")
  }
  const editProduct = (_id) => {
    navigate(`/product/update/${_id}`)
  }
  const handleDelete = (_id) => {
    dispatch(deleteProductById(_id))
    toast.success("Product deleted successfully", {position:"top-center"})
    dispatch(getProduct())
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
          {product?.length > 0 && product?.map((i, index) => {
            return(
             <tr key={index}>
               <td className="text-center align-middle">{i.name}</td>
               <td className="text-center align-middle">{i.quantity}</td>
               <td className="text-center align-middle">{(i.price.toLocaleString())}</td>
               <td className="text-center align-middle">{(i.quantity * i.price).toLocaleString()}</td>
               <td className="d-flex justify-content-center">
                 <Button className="btn btn-info text-white" onClick={() => editProduct(i._id)}>Edit</Button>
                 <Button className="btn btn-danger text-white" onClick={() => handleDelete(i._id)}>Delete</Button>
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