import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import Products from '../pages/Products';
import {storage} from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

function ProductsModal({recallData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ProductsName , setProductsName] =useState("")
  const [ProductsImage, setProductsImage]= useState (null)



  const AddProducts =(e)=> {
    e.preventDefault();
     console.log("working")
  }
  
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
       Add Products
      </Button>

      <Modal show={show} onHide={handleClose} centered  backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={AddProducts}>
  <div className="mb-3">
    <label htmlFor="ProductsName" className="form-label">
      Products Name
    </label>
    <input
      value={ProductsName}
      onChange={(e) => setProductsName(e.target.value)}
      className="form-control"
      id="ProductsName"
      aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
   Products Image
  </label>
  <input className="form-control" onChange={(e) => setProductsImage(e.target.files[0])} type="file" id="formFile" />
</div>


  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        
</Modal.Body>
       
      </Modal>
    </>
  );
}

export default ProductsModal;
